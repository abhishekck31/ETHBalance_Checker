import type { NextRequest } from "next/server"

function isValidEthAddress(addr: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(addr.trim())
}

// Convert Wei string to Ether string with 5 decimals using BigInt math
function weiToEtherFixed5(weiStr: string): string {
  if (!/^\d+$/.test(weiStr)) return "0.00000"
  const wei = BigInt(weiStr)
  const base = 10n ** 18n
  const whole = wei / base
  const remainder = wei % base
  const scaled = (remainder * 10n ** 5n) / base // floor to 5 decimals
  const decimals = scaled.toString().padStart(5, "0")
  return `${whole.toString()}.${decimals}`
}

export async function POST(req: NextRequest) {
  try {
    const { address } = (await req.json()) as { address?: string }

    if (!address || typeof address !== "string") {
      return Response.json({ error: "Missing 'address' in request body." }, { status: 400 })
    }
    if (!isValidEthAddress(address)) {
      return Response.json({ error: "Invalid Ethereum address format." }, { status: 400 })
    }

    const apiKey = process.env.ETHERSCAN_API_KEY
    if (!apiKey) {
      return Response.json({ error: "Server misconfiguration: ETHERSCAN_API_KEY is not set." }, { status: 500 })
    }

    const url = new URL("https://api.etherscan.io/api")
    url.searchParams.set("module", "account")
    url.searchParams.set("action", "balance")
    url.searchParams.set("address", address)
    url.searchParams.set("tag", "latest")
    url.searchParams.set("apikey", apiKey)

    const res = await fetch(url.toString(), { method: "GET" })
    if (!res.ok) {
      return Response.json({ error: `Etherscan request failed with status ${res.status}.` }, { status: 502 })
    }

    const data = (await res.json()) as { status?: string; message?: string; result?: string }

    if (data.status !== "1" || !data.result) {
      return Response.json({ error: data.message || "Failed to retrieve balance from Etherscan." }, { status: 502 })
    }

    const balanceEther = weiToEtherFixed5(data.result)
    return Response.json({ balanceEther })
  } catch {
    return Response.json({ error: "Unexpected server error." }, { status: 500 })
  }
}
