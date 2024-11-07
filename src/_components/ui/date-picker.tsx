"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/_lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SelectSingleEventHandler } from "react-day-picker"
import { ptBR } from "date-fns/locale"
import { format, isAfter } from "date-fns"

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
