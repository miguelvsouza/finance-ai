"use client"

import { Button } from "@/_components/ui/button"
import { Separator } from "@/_components/ui/separator"
import { Check } from "lucide-react"

interface SubscriptionProps {
  title: string
  price: number
  benefits: string[]
  isActive?: boolean
}

export function Subscription({
  title,
  price,
  benefits,
  isActive = false,
}: SubscriptionProps) {
  const isActiveStyle = isActive ? "border border-primary" : "border"

  return (
    <div
      className={`flex w-[450px] flex-col rounded-md transition hover:bg-muted/20 ${isActiveStyle}`}
    >
      <div className="flex flex-col items-center gap-4 px-8 py-10">
        <span className="text-2xl font-semibold tracking-tight">{title}</span>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl">R$</span>
          <span className="text-6xl">
            {price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </span>
          <span className="text-xl text-muted-foreground">/mês</span>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-8 px-8 py-10">
        <div className="flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <span>
                <Check className="text-primary" />
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>

        <Button
          disabled={isActive}
          className="w-full rounded-full font-bold"
        >
          {isActive ? "Seu plano atual" : "Quero este plano"}
        </Button>
      </div>
    </div>
  )
}
