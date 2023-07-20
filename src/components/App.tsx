import React, { ReactElement } from 'react'
import DatePicker from 'react-datepicker'

interface IDatePicker {
    autoFocus?: boolean
    calendars?: 1 | 2 | 3
    className?: string
    dayOfWeekFormatter?: (day: string) => string
    defaultValue?: string
    disabled?: boolean
    displayWeekNumber?: boolean
    format?: string
    loading?: boolean
    maxDate?: any
    minDate?: any
    onChange: (date: Date) => void
    renderLoading?: () => ReactElement
}

export const CustomDatePicker: React.FC<IDatePicker> = ({
    autoFocus = false,
    calendars = 2,
    className,
    dayOfWeekFormatter = (day) => day.charAt(0).toUpperCase(),
    defaultValue,
    disabled = false,
    displayWeekNumber = false,
    format = 'MM/dd/yyyy',
    loading = false,
    maxDate,
    minDate,
    onChange,
    renderLoading = () => <div>Loading...</div>,
}): ReactElement => {
    return loading ? (
        renderLoading()
    ) : (
        <DatePicker
            autoFocus={autoFocus}
            monthsShown={calendars}
            className={className !== undefined ? className : ''}
            onChange={onChange}
            adjustDateOnChange={true}
            allowSameDay={true}
            autoComplete='off'
            calendarClassName={className !== undefined ? className : ''}
            calendarStartDay={0}
            closeOnScroll={true}
            formatWeekDay={dayOfWeekFormatter}
            minDate={minDate}
            maxDate={maxDate}
            value={defaultValue}
            disabled={disabled}
            showWeekNumbers={displayWeekNumber}
            dateFormat={format}
        />
    )
}
