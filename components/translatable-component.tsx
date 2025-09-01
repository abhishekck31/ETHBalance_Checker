"use client"

import { useLanguage } from "@/contexts/language-context"

export function TranslatableComponent() {
  const { t } = useLanguage()

  return (
    <div>
      <h2>{t("component.title")}</h2>
      <p>{t("component.description")}</p>
    </div>
  )
}
