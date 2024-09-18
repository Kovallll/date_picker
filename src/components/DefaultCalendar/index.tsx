import { memo, useContext, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import {
    datePlaceholder,
    endRangePlaceholder,
    startRangePlaceholder,
    todoButtonText,
} from './config'
import {
    CalendarArticle,
    CalendarSection,
    ErrorMesssage,
    InputBlock,
    TodoButton,
} from './styled'
import { DefaultCalendarProps } from './types'

import DateBar from '@components/DateBar'
import { DateInput } from '@components/DateInput'
import { DaysTable } from '@components/DaysTable'
import { TodoModal } from '@components/TodoModal'
import WeekBar from '@components/WeekBar'
import {
    daysInWeek,
    initialActiveCellId,
    initialWeekDays,
    todosKey,
} from '@constants'
import { InputContext } from '@context'
import { useClickOutside, useInputDate } from '@hooks'
import { LocalStorage } from '@utils'

const DefaultCalendar = (props: DefaultCalendarProps) => {
    const {
        isWithRange = false,
        isWithTodos,
        onClickWithRange,
        isChangeStartDay,
        handleChangeWeekDays,
        handleRemoveTodo,
        handleAddTodo,
        handleRemoveAllTodos,
        handleUpdateTodo,
        startDay = 1,
        ...restProps
    } = props
    const isWithInput = useContext(InputContext)
    const [isOpenTable, setIsOpenTable] = useState(!isWithInput)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [error, setError] = useState('')
    const [isKeyboardChange, setIsKeyboardChange] = useState(false)
    const [weekDays, setWeekDays] = useState(initialWeekDays)
    const [activeCellId, setActiveCellId] = useState(initialActiveCellId)

    const calendarRef = useRef(null)
    const {
        firstInputDate,
        handleChangeFirstDateInput,
        secondInputDate,
        handleChangeSecondDateInput,
    } = useInputDate()
    const localStorage = new LocalStorage()

    const handleChangeActiveCellId = (id: string) => {
        setActiveCellId(id)
    }

    const handleChangeModalState = () => {
        setIsOpenModal((prev) => !prev)
    }

    const isSunday =
        !!isChangeStartDay &&
        weekDays === initialWeekDays &&
        !!handleChangeWeekDays

    if (isSunday) {
        const newWeekDays = handleChangeWeekDays()
        setWeekDays(newWeekDays)
    }

    const isDisabled = firstInputDate.length <= daysInWeek
    const isDisabledTodos = activeCellId === initialActiveCellId
    const handleChangeError = (error: string) => {
        setError(error)
    }

    useClickOutside(calendarRef, () => {
        if (isWithInput) {
            setError('')
            handleChangeFirstDateInput('')
            handleChangeSecondDateInput('')
            setIsOpenTable(false)
        }
    })

    const handleKeyboardChange = (isKeyboard: boolean) => {
        setIsKeyboardChange(isKeyboard)
    }

    const handleFocus = () => {
        setIsOpenTable(true)
    }

    const handleOpenCalendar = () => {
        setIsOpenTable((prev) => !prev)
        handleChangeFirstDateInput('')
        handleChangeError('')
    }

    const handleClickTodoButton = () => {
        if (!isDisabledTodos) handleChangeModalState()
    }

    const todo = localStorage
        .getItem(todosKey, [])
        .find((todo) => todo.id == activeCellId) ?? { id: '', data: [] }
    const placeholder = isWithRange ? startRangePlaceholder : datePlaceholder
    return (
        <CalendarSection
            $isWithRange={isWithRange}
            $isWithInput={isWithInput}
            ref={calendarRef}
        >
            <ErrorMesssage>{error && error}</ErrorMesssage>
            <InputBlock>
                {isWithInput && (
                    <DateInput
                        placeholder={placeholder}
                        handleChangeError={handleChangeError}
                        handleKeyboardChange={handleKeyboardChange}
                        handleFocus={handleFocus}
                        handleOpenCalendar={handleOpenCalendar}
                        handleChangeDateInput={handleChangeFirstDateInput}
                        date={firstInputDate}
                    />
                )}
                {isWithInput && isWithRange && (
                    <DateInput
                        placeholder={endRangePlaceholder}
                        handleChangeError={handleChangeError}
                        handleKeyboardChange={handleKeyboardChange}
                        handleFocus={handleFocus}
                        handleOpenCalendar={handleOpenCalendar}
                        handleChangeDateInput={handleChangeSecondDateInput}
                        date={secondInputDate}
                        isDisabled={isDisabled}
                    />
                )}
            </InputBlock>
            {isOpenTable && (
                <>
                    <CalendarArticle {...restProps} $isWithTodos={isWithTodos}>
                        <DateBar />
                        <WeekBar weekDays={weekDays} />
                        <DaysTable
                            handleChangeError={handleChangeError}
                            firstInputDate={firstInputDate}
                            secondInputDate={secondInputDate}
                            isWithRange={isWithRange}
                            handleKeyboardChange={handleKeyboardChange}
                            isKeyboardChange={isKeyboardChange}
                            onClickWithRange={onClickWithRange}
                            handleChangeFirstDateInput={
                                handleChangeFirstDateInput
                            }
                            handleChangeSecondDateInput={
                                handleChangeSecondDateInput
                            }
                            activeCellId={activeCellId}
                            handleChangeActiveCellId={handleChangeActiveCellId}
                            weekDays={weekDays}
                            startDay={startDay}
                            isWithTodos={isWithTodos}
                        />
                    </CalendarArticle>
                    {isWithTodos && (
                        <>
                            <TodoButton
                                $isDisabled={isDisabledTodos}
                                onClick={handleClickTodoButton}
                            >
                                {todoButtonText}
                            </TodoButton>
                            {isOpenModal &&
                                createPortal(
                                    <TodoModal
                                        onClose={handleChangeModalState}
                                        todo={todo}
                                        addTodo={handleAddTodo}
                                        removeTodo={handleRemoveTodo}
                                        removeAllTodos={handleRemoveAllTodos}
                                        updateTodo={handleUpdateTodo}
                                        todoId={activeCellId}
                                    />,
                                    document.body
                                )}
                        </>
                    )}
                </>
            )}
        </CalendarSection>
    )
}

export default memo(DefaultCalendar)
