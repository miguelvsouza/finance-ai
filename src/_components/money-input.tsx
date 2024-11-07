import { forwardRef } from "react"
import { NumericFormat, NumericFormatProps } from "react-number-format"
import { Input, InputProps } from "./ui/input"

export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    )
  },
)

MoneyInput.displayName = "MoneyInput"
