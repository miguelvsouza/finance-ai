import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client"

export const TRANSACTION_TYPE_OPTIONS = [
  { value: TransactionType.DEPOSIT, label: "Depósito", color: "text-primary" },
  { value: TransactionType.EXPENSE, label: "Despesa", color: "text-danger" },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
    color: "text-accent-foreground",
  },
]

export const TRANSACTION_CATEGORY_LABELS = {
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.OTHER]: "Outros",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.UTILITY]: "Utilidades",
}

export const TRANSACTION_CATEGORY_OPTIONS = [
  { value: TransactionCategory.EDUCATION, label: "Educação" },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: "Entretenimento",
  },
  { value: TransactionCategory.FOOD, label: "Alimentação" },
  { value: TransactionCategory.HEALTH, label: "Saúde" },
  { value: TransactionCategory.HOUSING, label: "Moradia" },
  { value: TransactionCategory.SALARY, label: "Salário" },
  { value: TransactionCategory.TRANSPORTATION, label: "Transporte" },
  { value: TransactionCategory.UTILITY, label: "Utilidades" },
  { value: TransactionCategory.OTHER, label: "Outros" },
]

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência Bancária",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de Crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de Débito",
  [TransactionPaymentMethod.OTHER]: "Outros",
  [TransactionPaymentMethod.PIX]: "Pix",
}

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  { value: TransactionPaymentMethod.BANK_SLIP, label: "Boleto" },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: "Transferência Bancária",
  },
  { value: TransactionPaymentMethod.CASH, label: "Dinheiro" },
  { value: TransactionPaymentMethod.CREDIT_CARD, label: "Cartão de Crédito" },
  { value: TransactionPaymentMethod.DEBIT_CARD, label: "Cartão de Débito" },
  { value: TransactionPaymentMethod.PIX, label: "Pix" },
  { value: TransactionPaymentMethod.OTHER, label: "Outros" },
]
