import { Header } from "@/_components/header"
import { Subscription } from "./(components)/subscription"

export default function SubscriptionPage() {
  return (
    <>
      <Header />

      <div className="space-y-6 px-8 py-6">
        <h2 className="text-2xl font-bold tracking-tight">Assinatura</h2>

        <div className="flex w-full items-center gap-6">
          <Subscription
            isActive
            title="Plano Free"
            price={0}
            benefits={[
              "Transações limitadas",
              "Relatórios IA limitados",
              "...",
            ]}
          />

          <Subscription
            title="Plano Pro"
            price={19.9}
            benefits={[
              "Transações ilimitadas",
              "Relatórios IA ilimitados",
              "...",
            ]}
          />
        </div>
      </div>
    </>
  )
}
