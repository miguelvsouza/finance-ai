"use client"

import { CalendarIcon } from "lucide-react"

import { Button } from "@/_components/ui/button"
import { Calendar } from "@/_components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/_components/ui/popover"
import { cn } from "@/_lib/utils"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { SelectSingleEventHandler } from "react-day-picker"

interface DatePickerProps {
  date: Date
  onChange: SelectSingleEventHandler
  align: "start" | "center" | "end"
}

export function DatePicker({ date, onChange, align }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
          ) : (
            <span>Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        align={align}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          locale={ptBR}
          initialFocus
          disabled={(dates) => dates > new Date()}
        />
      </PopoverContent>
    </Popover>
  )
}
