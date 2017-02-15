// This file is generated automatically by `scripts/build_typings.js`. Please, don't change it.

// FP Interfaces

interface CurriedFn1<A, R> {
  <A>(a: A): R
}

interface CurriedFn2<A, B, R> {
  <A>(a: A): CurriedFn1<B, R>
  <A, B>(a: A, b: B): R
}

interface CurriedFn3<A, B, C, R> {
  <A>(a: A): CurriedFn2<B, C, R>
  <A,B>(a: A, b: B): CurriedFn1<C, R>
  <A,B,C>(a: A, b: B, c: C): R
}

interface CurriedFn4<A, B, C, D, R> {
  <A>(a: A): CurriedFn3<B, C, D, R>
  <A,B>(a: A, b: B): CurriedFn2<C, D, R>
  <A,B,C>(a: A, b: B, c: C): CurriedFn1<D, R>
  <A,B,C,D>(a: A, b: B, c: C, d: D): R
}

// Type Aliases

type Interval = {
  start: Date | string | number,
  end: Date | string | number
}

type Options = {
  weekStartsOn?: number,
  additionalDigits?: 0 | 1 | 2,
  locale?: Locale,
  unit?: 's' | 'm' | 'h' | 'd' | 'M' | 'Y',
  partialMethod?: 'floor' | 'ceil' | 'round'
}

type Locale = {
  distanceInWords?: {
    localize?: Function
  },
  format?: {
    formatters?: Object,
    formattingTokensRegExp?: RegExp
  },
  parse?: {
    units?: Object,
    parsers?: Object,
    parsingTokensRegExp?: RegExp
  }
}

// Regular Functions

declare module 'date-fns' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areIntervalsOverlapping (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWordsStrict {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: Options
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinInterval (
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean
  namespace isWithinInterval {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: Options
  ): Date
  namespace toDate {}
}

declare module 'date-fns/addDays' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOYears' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/addMilliseconds' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distanceInWords' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/endOfDay' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOYear' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/endOfMinute' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/getDate' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOYear' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/getMilliseconds' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getYear' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOYear' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/isSameMinute' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOYear' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/setMilliseconds' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setYear' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOYear' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/startOfMinute' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfYear' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOYears' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/subMilliseconds' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/addDays/index' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours/index' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOYears/index' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes/index' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths/index' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters/index' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds/index' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks/index' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears/index' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo/index' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc/index' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc/index' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours/index' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears/index' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distanceInWords/index' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/endOfDay/index' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour/index' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/endOfMinute/index' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth/index' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond/index' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek/index' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear/index' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/getDate/index' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay/index' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours/index' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay/index' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek/index' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOYear/index' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes/index' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth/index' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds/index' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime/index' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getYear/index' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter/index' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore/index' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate/index' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual/index' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday/index' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay/index' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour/index' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/isSameMinute/index' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth/index' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond/index' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek/index' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear/index' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday/index' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday/index' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday/index' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday/index' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid/index' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday/index' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend/index' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate/index' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay/index' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours/index' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay/index' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek/index' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOYear/index' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes/index' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth/index' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter/index' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds/index' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setYear/index' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay/index' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour/index' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/startOfMinute/index' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth/index' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond/index' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek/index' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfYear/index' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays/index' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours/index' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOYears/index' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes/index' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths/index' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters/index' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds/index' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks/index' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears/index' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate/index' {
  import {toDate} from 'date-fns'
  export = toDate
}

declare module 'date-fns/addDays/index.js' {
  import {addDays} from 'date-fns'
  export = addDays
}

declare module 'date-fns/addHours/index.js' {
  import {addHours} from 'date-fns'
  export = addHours
}

declare module 'date-fns/addISOYears/index.js' {
  import {addISOYears} from 'date-fns'
  export = addISOYears
}

declare module 'date-fns/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns'
  export = addMilliseconds
}

declare module 'date-fns/addMinutes/index.js' {
  import {addMinutes} from 'date-fns'
  export = addMinutes
}

declare module 'date-fns/addMonths/index.js' {
  import {addMonths} from 'date-fns'
  export = addMonths
}

declare module 'date-fns/addQuarters/index.js' {
  import {addQuarters} from 'date-fns'
  export = addQuarters
}

declare module 'date-fns/addSeconds/index.js' {
  import {addSeconds} from 'date-fns'
  export = addSeconds
}

declare module 'date-fns/addWeeks/index.js' {
  import {addWeeks} from 'date-fns'
  export = addWeeks
}

declare module 'date-fns/addYears/index.js' {
  import {addYears} from 'date-fns'
  export = addYears
}

declare module 'date-fns/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns'
  export = areIntervalsOverlapping
}

declare module 'date-fns/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns'
  export = closestIndexTo
}

declare module 'date-fns/closestTo/index.js' {
  import {closestTo} from 'date-fns'
  export = closestTo
}

declare module 'date-fns/compareAsc/index.js' {
  import {compareAsc} from 'date-fns'
  export = compareAsc
}

declare module 'date-fns/compareDesc/index.js' {
  import {compareDesc} from 'date-fns'
  export = compareDesc
}

declare module 'date-fns/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns'
  export = differenceInCalendarDays
}

declare module 'date-fns/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns'
  export = differenceInCalendarMonths
}

declare module 'date-fns/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns'
  export = differenceInCalendarYears
}

declare module 'date-fns/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns'
  export = differenceInDays
}

declare module 'date-fns/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns'
  export = differenceInHours
}

declare module 'date-fns/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns'
  export = differenceInISOYears
}

declare module 'date-fns/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns'
  export = differenceInMilliseconds
}

declare module 'date-fns/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns'
  export = differenceInMinutes
}

declare module 'date-fns/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns'
  export = differenceInMonths
}

declare module 'date-fns/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns'
  export = differenceInQuarters
}

declare module 'date-fns/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns'
  export = differenceInSeconds
}

declare module 'date-fns/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns'
  export = differenceInWeeks
}

declare module 'date-fns/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns'
  export = differenceInYears
}

declare module 'date-fns/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns'
  export = distanceInWords
}

declare module 'date-fns/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns'
  export = distanceInWordsStrict
}

declare module 'date-fns/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns'
  export = eachDayOfInterval
}

declare module 'date-fns/endOfDay/index.js' {
  import {endOfDay} from 'date-fns'
  export = endOfDay
}

declare module 'date-fns/endOfHour/index.js' {
  import {endOfHour} from 'date-fns'
  export = endOfHour
}

declare module 'date-fns/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns'
  export = endOfISOWeek
}

declare module 'date-fns/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns'
  export = endOfISOYear
}

declare module 'date-fns/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns'
  export = endOfMinute
}

declare module 'date-fns/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns'
  export = endOfMonth
}

declare module 'date-fns/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns'
  export = endOfQuarter
}

declare module 'date-fns/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns'
  export = endOfSecond
}

declare module 'date-fns/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns'
  export = endOfWeek
}

declare module 'date-fns/endOfYear/index.js' {
  import {endOfYear} from 'date-fns'
  export = endOfYear
}

declare module 'date-fns/format/index.js' {
  import {format} from 'date-fns'
  export = format
}

declare module 'date-fns/getDate/index.js' {
  import {getDate} from 'date-fns'
  export = getDate
}

declare module 'date-fns/getDay/index.js' {
  import {getDay} from 'date-fns'
  export = getDay
}

declare module 'date-fns/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns'
  export = getDayOfYear
}

declare module 'date-fns/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns'
  export = getDaysInMonth
}

declare module 'date-fns/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns'
  export = getDaysInYear
}

declare module 'date-fns/getHours/index.js' {
  import {getHours} from 'date-fns'
  export = getHours
}

declare module 'date-fns/getISODay/index.js' {
  import {getISODay} from 'date-fns'
  export = getISODay
}

declare module 'date-fns/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns'
  export = getISOWeek
}

declare module 'date-fns/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns'
  export = getISOWeeksInYear
}

declare module 'date-fns/getISOYear/index.js' {
  import {getISOYear} from 'date-fns'
  export = getISOYear
}

declare module 'date-fns/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns'
  export = getMilliseconds
}

declare module 'date-fns/getMinutes/index.js' {
  import {getMinutes} from 'date-fns'
  export = getMinutes
}

declare module 'date-fns/getMonth/index.js' {
  import {getMonth} from 'date-fns'
  export = getMonth
}

declare module 'date-fns/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/getQuarter/index.js' {
  import {getQuarter} from 'date-fns'
  export = getQuarter
}

declare module 'date-fns/getSeconds/index.js' {
  import {getSeconds} from 'date-fns'
  export = getSeconds
}

declare module 'date-fns/getTime/index.js' {
  import {getTime} from 'date-fns'
  export = getTime
}

declare module 'date-fns/getYear/index.js' {
  import {getYear} from 'date-fns'
  export = getYear
}

declare module 'date-fns/isAfter/index.js' {
  import {isAfter} from 'date-fns'
  export = isAfter
}

declare module 'date-fns/isBefore/index.js' {
  import {isBefore} from 'date-fns'
  export = isBefore
}

declare module 'date-fns/isDate/index.js' {
  import {isDate} from 'date-fns'
  export = isDate
}

declare module 'date-fns/isEqual/index.js' {
  import {isEqual} from 'date-fns'
  export = isEqual
}

declare module 'date-fns/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns'
  export = isFirstDayOfMonth
}

declare module 'date-fns/isFriday/index.js' {
  import {isFriday} from 'date-fns'
  export = isFriday
}

declare module 'date-fns/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns'
  export = isLastDayOfMonth
}

declare module 'date-fns/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns'
  export = isLeapYear
}

declare module 'date-fns/isMonday/index.js' {
  import {isMonday} from 'date-fns'
  export = isMonday
}

declare module 'date-fns/isSameDay/index.js' {
  import {isSameDay} from 'date-fns'
  export = isSameDay
}

declare module 'date-fns/isSameHour/index.js' {
  import {isSameHour} from 'date-fns'
  export = isSameHour
}

declare module 'date-fns/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns'
  export = isSameISOWeek
}

declare module 'date-fns/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns'
  export = isSameISOYear
}

declare module 'date-fns/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns'
  export = isSameMinute
}

declare module 'date-fns/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns'
  export = isSameMonth
}

declare module 'date-fns/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns'
  export = isSameQuarter
}

declare module 'date-fns/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns'
  export = isSameSecond
}

declare module 'date-fns/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns'
  export = isSameWeek
}

declare module 'date-fns/isSameYear/index.js' {
  import {isSameYear} from 'date-fns'
  export = isSameYear
}

declare module 'date-fns/isSaturday/index.js' {
  import {isSaturday} from 'date-fns'
  export = isSaturday
}

declare module 'date-fns/isSunday/index.js' {
  import {isSunday} from 'date-fns'
  export = isSunday
}

declare module 'date-fns/isThursday/index.js' {
  import {isThursday} from 'date-fns'
  export = isThursday
}

declare module 'date-fns/isTuesday/index.js' {
  import {isTuesday} from 'date-fns'
  export = isTuesday
}

declare module 'date-fns/isValid/index.js' {
  import {isValid} from 'date-fns'
  export = isValid
}

declare module 'date-fns/isWednesday/index.js' {
  import {isWednesday} from 'date-fns'
  export = isWednesday
}

declare module 'date-fns/isWeekend/index.js' {
  import {isWeekend} from 'date-fns'
  export = isWeekend
}

declare module 'date-fns/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns'
  export = isWithinInterval
}

declare module 'date-fns/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns'
  export = lastDayOfISOWeek
}

declare module 'date-fns/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns'
  export = lastDayOfISOYear
}

declare module 'date-fns/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns'
  export = lastDayOfMonth
}

declare module 'date-fns/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns'
  export = lastDayOfQuarter
}

declare module 'date-fns/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns'
  export = lastDayOfWeek
}

declare module 'date-fns/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns'
  export = lastDayOfYear
}

declare module 'date-fns/max/index.js' {
  import {max} from 'date-fns'
  export = max
}

declare module 'date-fns/min/index.js' {
  import {min} from 'date-fns'
  export = min
}

declare module 'date-fns/parse/index.js' {
  import {parse} from 'date-fns'
  export = parse
}

declare module 'date-fns/setDate/index.js' {
  import {setDate} from 'date-fns'
  export = setDate
}

declare module 'date-fns/setDay/index.js' {
  import {setDay} from 'date-fns'
  export = setDay
}

declare module 'date-fns/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns'
  export = setDayOfYear
}

declare module 'date-fns/setHours/index.js' {
  import {setHours} from 'date-fns'
  export = setHours
}

declare module 'date-fns/setISODay/index.js' {
  import {setISODay} from 'date-fns'
  export = setISODay
}

declare module 'date-fns/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns'
  export = setISOWeek
}

declare module 'date-fns/setISOYear/index.js' {
  import {setISOYear} from 'date-fns'
  export = setISOYear
}

declare module 'date-fns/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns'
  export = setMilliseconds
}

declare module 'date-fns/setMinutes/index.js' {
  import {setMinutes} from 'date-fns'
  export = setMinutes
}

declare module 'date-fns/setMonth/index.js' {
  import {setMonth} from 'date-fns'
  export = setMonth
}

declare module 'date-fns/setQuarter/index.js' {
  import {setQuarter} from 'date-fns'
  export = setQuarter
}

declare module 'date-fns/setSeconds/index.js' {
  import {setSeconds} from 'date-fns'
  export = setSeconds
}

declare module 'date-fns/setYear/index.js' {
  import {setYear} from 'date-fns'
  export = setYear
}

declare module 'date-fns/startOfDay/index.js' {
  import {startOfDay} from 'date-fns'
  export = startOfDay
}

declare module 'date-fns/startOfHour/index.js' {
  import {startOfHour} from 'date-fns'
  export = startOfHour
}

declare module 'date-fns/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns'
  export = startOfISOWeek
}

declare module 'date-fns/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns'
  export = startOfISOYear
}

declare module 'date-fns/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns'
  export = startOfMinute
}

declare module 'date-fns/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns'
  export = startOfMonth
}

declare module 'date-fns/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns'
  export = startOfQuarter
}

declare module 'date-fns/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns'
  export = startOfSecond
}

declare module 'date-fns/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns'
  export = startOfWeek
}

declare module 'date-fns/startOfYear/index.js' {
  import {startOfYear} from 'date-fns'
  export = startOfYear
}

declare module 'date-fns/subDays/index.js' {
  import {subDays} from 'date-fns'
  export = subDays
}

declare module 'date-fns/subHours/index.js' {
  import {subHours} from 'date-fns'
  export = subHours
}

declare module 'date-fns/subISOYears/index.js' {
  import {subISOYears} from 'date-fns'
  export = subISOYears
}

declare module 'date-fns/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns'
  export = subMilliseconds
}

declare module 'date-fns/subMinutes/index.js' {
  import {subMinutes} from 'date-fns'
  export = subMinutes
}

declare module 'date-fns/subMonths/index.js' {
  import {subMonths} from 'date-fns'
  export = subMonths
}

declare module 'date-fns/subQuarters/index.js' {
  import {subQuarters} from 'date-fns'
  export = subQuarters
}

declare module 'date-fns/subSeconds/index.js' {
  import {subSeconds} from 'date-fns'
  export = subSeconds
}

declare module 'date-fns/subWeeks/index.js' {
  import {subWeeks} from 'date-fns'
  export = subWeeks
}

declare module 'date-fns/subYears/index.js' {
  import {subYears} from 'date-fns'
  export = subYears
}

declare module 'date-fns/toDate/index.js' {
  import {toDate} from 'date-fns'
  export = toDate
}

// FP Functions

declare module 'date-fns/fp' {
  let addDays: CurriedFn2<number, Date | string | number, Date>
  namespace addDays {}

  let addHours: CurriedFn2<number, Date | string | number, Date>
  namespace addHours {}

  let addISOYears: CurriedFn2<number, Date | string | number, Date>
  namespace addISOYears {}

  let addMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace addMilliseconds {}

  let addMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace addMinutes {}

  let addMonths: CurriedFn2<number, Date | string | number, Date>
  namespace addMonths {}

  let addQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace addQuarters {}

  let addSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace addSeconds {}

  let addWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace addWeeks {}

  let addYears: CurriedFn2<number, Date | string | number, Date>
  namespace addYears {}

  let areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  let closestIndexTo: CurriedFn2<(Date | string | number)[], Date | string | number, number>
  namespace closestIndexTo {}

  let closestTo: CurriedFn2<(Date | string | number)[], Date | string | number, Date>
  namespace closestTo {}

  let compareAsc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareAsc {}

  let compareDesc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareDesc {}

  let differenceInCalendarDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDays {}

  let differenceInCalendarISOWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeks {}

  let differenceInCalendarISOYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOYears {}

  let differenceInCalendarMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonths {}

  let differenceInCalendarQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuarters {}

  let differenceInCalendarWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeks {}

  let differenceInCalendarYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYears {}

  let differenceInDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInDays {}

  let differenceInHours: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInHours {}

  let differenceInISOYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInISOYears {}

  let differenceInMilliseconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMilliseconds {}

  let differenceInMinutes: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMinutes {}

  let differenceInMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMonths {}

  let differenceInQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInQuarters {}

  let differenceInSeconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInSeconds {}

  let differenceInWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInWeeks {}

  let differenceInYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInYears {}

  let distanceInWords: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace distanceInWords {}

  let distanceInWordsStrict: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace distanceInWordsStrict {}

  let eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  let endOfDay: CurriedFn1<Date | string | number, Date>
  namespace endOfDay {}

  let endOfHour: CurriedFn1<Date | string | number, Date>
  namespace endOfHour {}

  let endOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeek {}

  let endOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace endOfISOYear {}

  let endOfMinute: CurriedFn1<Date | string | number, Date>
  namespace endOfMinute {}

  let endOfMonth: CurriedFn1<Date | string | number, Date>
  namespace endOfMonth {}

  let endOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace endOfQuarter {}

  let endOfSecond: CurriedFn1<Date | string | number, Date>
  namespace endOfSecond {}

  let endOfWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfWeek {}

  let endOfYear: CurriedFn1<Date | string | number, Date>
  namespace endOfYear {}

  let format: CurriedFn2<string, Date | string | number, string>
  namespace format {}

  let getDate: CurriedFn1<Date | string | number, number>
  namespace getDate {}

  let getDay: CurriedFn1<Date | string | number, number>
  namespace getDay {}

  let getDayOfYear: CurriedFn1<Date | string | number, number>
  namespace getDayOfYear {}

  let getDaysInMonth: CurriedFn1<Date | string | number, number>
  namespace getDaysInMonth {}

  let getDaysInYear: CurriedFn1<Date | string | number, number>
  namespace getDaysInYear {}

  let getHours: CurriedFn1<Date | string | number, number>
  namespace getHours {}

  let getISODay: CurriedFn1<Date | string | number, number>
  namespace getISODay {}

  let getISOWeek: CurriedFn1<Date | string | number, number>
  namespace getISOWeek {}

  let getISOWeeksInYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeeksInYear {}

  let getISOYear: CurriedFn1<Date | string | number, number>
  namespace getISOYear {}

  let getMilliseconds: CurriedFn1<Date | string | number, number>
  namespace getMilliseconds {}

  let getMinutes: CurriedFn1<Date | string | number, number>
  namespace getMinutes {}

  let getMonth: CurriedFn1<Date | string | number, number>
  namespace getMonth {}

  let getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  let getQuarter: CurriedFn1<Date | string | number, number>
  namespace getQuarter {}

  let getSeconds: CurriedFn1<Date | string | number, number>
  namespace getSeconds {}

  let getTime: CurriedFn1<Date | string | number, number>
  namespace getTime {}

  let getYear: CurriedFn1<Date | string | number, number>
  namespace getYear {}

  let isAfter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isAfter {}

  let isBefore: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isBefore {}

  let isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  let isEqual: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isEqual {}

  let isFirstDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isFirstDayOfMonth {}

  let isFriday: CurriedFn1<Date | string | number, boolean>
  namespace isFriday {}

  let isLastDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isLastDayOfMonth {}

  let isLeapYear: CurriedFn1<Date | string | number, boolean>
  namespace isLeapYear {}

  let isMonday: CurriedFn1<Date | string | number, boolean>
  namespace isMonday {}

  let isSameDay: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameDay {}

  let isSameHour: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameHour {}

  let isSameISOWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeek {}

  let isSameISOYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOYear {}

  let isSameMinute: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMinute {}

  let isSameMonth: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMonth {}

  let isSameQuarter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameQuarter {}

  let isSameSecond: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameSecond {}

  let isSameWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameWeek {}

  let isSameYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameYear {}

  let isSaturday: CurriedFn1<Date | string | number, boolean>
  namespace isSaturday {}

  let isSunday: CurriedFn1<Date | string | number, boolean>
  namespace isSunday {}

  let isThursday: CurriedFn1<Date | string | number, boolean>
  namespace isThursday {}

  let isTuesday: CurriedFn1<Date | string | number, boolean>
  namespace isTuesday {}

  let isValid: CurriedFn1<Date, boolean>
  namespace isValid {}

  let isWednesday: CurriedFn1<Date | string | number, boolean>
  namespace isWednesday {}

  let isWeekend: CurriedFn1<Date | string | number, boolean>
  namespace isWeekend {}

  let isWithinInterval: CurriedFn2<Interval, Date | string | number, boolean>
  namespace isWithinInterval {}

  let lastDayOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeek {}

  let lastDayOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOYear {}

  let lastDayOfMonth: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfMonth {}

  let lastDayOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfQuarter {}

  let lastDayOfWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfWeek {}

  let lastDayOfYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfYear {}

  let max: CurriedFn1<(Date | string | number)[], Date>
  namespace max {}

  let min: CurriedFn1<(Date | string | number)[], Date>
  namespace min {}

  let parse: CurriedFn3<Date | string | number, string, string, Date>
  namespace parse {}

  let setDate: CurriedFn2<number, Date | string | number, Date>
  namespace setDate {}

  let setDay: CurriedFn2<number, Date | string | number, Date>
  namespace setDay {}

  let setDayOfYear: CurriedFn2<number, Date | string | number, Date>
  namespace setDayOfYear {}

  let setHours: CurriedFn2<number, Date | string | number, Date>
  namespace setHours {}

  let setISODay: CurriedFn2<number, Date | string | number, Date>
  namespace setISODay {}

  let setISOWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeek {}

  let setISOYear: CurriedFn2<number, Date | string | number, Date>
  namespace setISOYear {}

  let setMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace setMilliseconds {}

  let setMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace setMinutes {}

  let setMonth: CurriedFn2<number, Date | string | number, Date>
  namespace setMonth {}

  let setQuarter: CurriedFn2<number, Date | string | number, Date>
  namespace setQuarter {}

  let setSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace setSeconds {}

  let setYear: CurriedFn2<number, Date | string | number, Date>
  namespace setYear {}

  let startOfDay: CurriedFn1<Date | string | number, Date>
  namespace startOfDay {}

  let startOfHour: CurriedFn1<Date | string | number, Date>
  namespace startOfHour {}

  let startOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeek {}

  let startOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace startOfISOYear {}

  let startOfMinute: CurriedFn1<Date | string | number, Date>
  namespace startOfMinute {}

  let startOfMonth: CurriedFn1<Date | string | number, Date>
  namespace startOfMonth {}

  let startOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace startOfQuarter {}

  let startOfSecond: CurriedFn1<Date | string | number, Date>
  namespace startOfSecond {}

  let startOfWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfWeek {}

  let startOfYear: CurriedFn1<Date | string | number, Date>
  namespace startOfYear {}

  let subDays: CurriedFn2<number, Date | string | number, Date>
  namespace subDays {}

  let subHours: CurriedFn2<number, Date | string | number, Date>
  namespace subHours {}

  let subISOYears: CurriedFn2<number, Date | string | number, Date>
  namespace subISOYears {}

  let subMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace subMilliseconds {}

  let subMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace subMinutes {}

  let subMonths: CurriedFn2<number, Date | string | number, Date>
  namespace subMonths {}

  let subQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace subQuarters {}

  let subSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace subSeconds {}

  let subWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace subWeeks {}

  let subYears: CurriedFn2<number, Date | string | number, Date>
  namespace subYears {}

  let toDate: CurriedFn1<Date | string | number, Date>
  namespace toDate {}

  let addDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addDaysWithOptions {}

  let addHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addHoursWithOptions {}

  let addISOYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addISOYearsWithOptions {}

  let addMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMillisecondsWithOptions {}

  let addMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMinutesWithOptions {}

  let addMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMonthsWithOptions {}

  let addQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addQuartersWithOptions {}

  let addSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addSecondsWithOptions {}

  let addWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addWeeksWithOptions {}

  let addYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addYearsWithOptions {}

  let areIntervalsOverlappingWithOptions: CurriedFn3<Options, Interval, Interval, boolean>
  namespace areIntervalsOverlappingWithOptions {}

  let closestIndexToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, number>
  namespace closestIndexToWithOptions {}

  let closestToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, Date>
  namespace closestToWithOptions {}

  let compareAscWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareAscWithOptions {}

  let compareDescWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareDescWithOptions {}

  let differenceInCalendarDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDaysWithOptions {}

  let differenceInCalendarISOWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeksWithOptions {}

  let differenceInCalendarISOYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOYearsWithOptions {}

  let differenceInCalendarMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonthsWithOptions {}

  let differenceInCalendarQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuartersWithOptions {}

  let differenceInCalendarWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeksWithOptions {}

  let differenceInCalendarYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYearsWithOptions {}

  let differenceInDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInDaysWithOptions {}

  let differenceInHoursWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInHoursWithOptions {}

  let differenceInISOYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInISOYearsWithOptions {}

  let differenceInMillisecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMillisecondsWithOptions {}

  let differenceInMinutesWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMinutesWithOptions {}

  let differenceInMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMonthsWithOptions {}

  let differenceInQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInQuartersWithOptions {}

  let differenceInSecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInSecondsWithOptions {}

  let differenceInWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInWeeksWithOptions {}

  let differenceInYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInYearsWithOptions {}

  let distanceInWordsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace distanceInWordsWithOptions {}

  let distanceInWordsStrictWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace distanceInWordsStrictWithOptions {}

  let eachDayOfIntervalWithOptions: CurriedFn2<Options, Interval, Date[]>
  namespace eachDayOfIntervalWithOptions {}

  let endOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfDayWithOptions {}

  let endOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfHourWithOptions {}

  let endOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekWithOptions {}

  let endOfISOYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOYearWithOptions {}

  let endOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMinuteWithOptions {}

  let endOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMonthWithOptions {}

  let endOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfQuarterWithOptions {}

  let endOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfSecondWithOptions {}

  let endOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfWeekWithOptions {}

  let endOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfYearWithOptions {}

  let formatWithOptions: CurriedFn3<Options, string, Date | string | number, string>
  namespace formatWithOptions {}

  let getDateWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDateWithOptions {}

  let getDayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayWithOptions {}

  let getDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayOfYearWithOptions {}

  let getDaysInMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInMonthWithOptions {}

  let getDaysInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInYearWithOptions {}

  let getHoursWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getHoursWithOptions {}

  let getISODayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISODayWithOptions {}

  let getISOWeekWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekWithOptions {}

  let getISOWeeksInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeeksInYearWithOptions {}

  let getISOYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOYearWithOptions {}

  let getMillisecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMillisecondsWithOptions {}

  let getMinutesWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMinutesWithOptions {}

  let getMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMonthWithOptions {}

  let getOverlappingDaysInIntervalsWithOptions: CurriedFn3<Options, Interval, Interval, number>
  namespace getOverlappingDaysInIntervalsWithOptions {}

  let getQuarterWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getQuarterWithOptions {}

  let getSecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getSecondsWithOptions {}

  let getTimeWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getTimeWithOptions {}

  let getYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getYearWithOptions {}

  let isAfterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isAfterWithOptions {}

  let isBeforeWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isBeforeWithOptions {}

  let isDateWithOptions: CurriedFn2<Options, any, boolean>
  namespace isDateWithOptions {}

  let isEqualWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isEqualWithOptions {}

  let isFirstDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFirstDayOfMonthWithOptions {}

  let isFridayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFridayWithOptions {}

  let isLastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLastDayOfMonthWithOptions {}

  let isLeapYearWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLeapYearWithOptions {}

  let isMondayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isMondayWithOptions {}

  let isSameDayWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameDayWithOptions {}

  let isSameHourWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameHourWithOptions {}

  let isSameISOWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekWithOptions {}

  let isSameISOYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOYearWithOptions {}

  let isSameMinuteWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMinuteWithOptions {}

  let isSameMonthWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMonthWithOptions {}

  let isSameQuarterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameQuarterWithOptions {}

  let isSameSecondWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameSecondWithOptions {}

  let isSameWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameWeekWithOptions {}

  let isSameYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameYearWithOptions {}

  let isSaturdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSaturdayWithOptions {}

  let isSundayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSundayWithOptions {}

  let isThursdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isThursdayWithOptions {}

  let isTuesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isTuesdayWithOptions {}

  let isValidWithOptions: CurriedFn2<Options, Date, boolean>
  namespace isValidWithOptions {}

  let isWednesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWednesdayWithOptions {}

  let isWeekendWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWeekendWithOptions {}

  let isWithinIntervalWithOptions: CurriedFn3<Options, Interval, Date | string | number, boolean>
  namespace isWithinIntervalWithOptions {}

  let lastDayOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekWithOptions {}

  let lastDayOfISOYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOYearWithOptions {}

  let lastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfMonthWithOptions {}

  let lastDayOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfQuarterWithOptions {}

  let lastDayOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfWeekWithOptions {}

  let lastDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfYearWithOptions {}

  let maxWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace maxWithOptions {}

  let minWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace minWithOptions {}

  let parseWithOptions: CurriedFn4<Options, Date | string | number, string, string, Date>
  namespace parseWithOptions {}

  let setDateWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDateWithOptions {}

  let setDayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayWithOptions {}

  let setDayOfYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayOfYearWithOptions {}

  let setHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setHoursWithOptions {}

  let setISODayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISODayWithOptions {}

  let setISOWeekWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekWithOptions {}

  let setISOYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOYearWithOptions {}

  let setMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMillisecondsWithOptions {}

  let setMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMinutesWithOptions {}

  let setMonthWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMonthWithOptions {}

  let setQuarterWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setQuarterWithOptions {}

  let setSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setSecondsWithOptions {}

  let setYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setYearWithOptions {}

  let startOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfDayWithOptions {}

  let startOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfHourWithOptions {}

  let startOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekWithOptions {}

  let startOfISOYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOYearWithOptions {}

  let startOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMinuteWithOptions {}

  let startOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMonthWithOptions {}

  let startOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfQuarterWithOptions {}

  let startOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfSecondWithOptions {}

  let startOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekWithOptions {}

  let startOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfYearWithOptions {}

  let subDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subDaysWithOptions {}

  let subHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subHoursWithOptions {}

  let subISOYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subISOYearsWithOptions {}

  let subMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMillisecondsWithOptions {}

  let subMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMinutesWithOptions {}

  let subMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMonthsWithOptions {}

  let subQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subQuartersWithOptions {}

  let subSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subSecondsWithOptions {}

  let subWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subWeeksWithOptions {}

  let subYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subYearsWithOptions {}

  let toDateWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace toDateWithOptions {}
}

declare module 'date-fns/fp/addDays' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/endOfDay' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDays/index' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears/index' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords/index' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/endOfDay/index' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour/index' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear/index' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate/index' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours/index' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear/index' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter/index' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear/index' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear/index' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max/index' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate/index' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours/index' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear/index' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear/index' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour/index' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear/index' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears/index' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDays/index.js' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHours/index.js' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYears/index.js' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonths/index.js' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYears/index.js' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestTo/index.js' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/format/index.js' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDate/index.js' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDay/index.js' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHours/index.js' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODay/index.js' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYear/index.js' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonth/index.js' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTime/index.js' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYear/index.js' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfter/index.js' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBefore/index.js' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDate/index.js' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqual/index.js' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFriday/index.js' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMonday/index.js' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSunday/index.js' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursday/index.js' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValid/index.js' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/max/index.js' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/min/index.js' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parse/index.js' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDate/index.js' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDay/index.js' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHours/index.js' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODay/index.js' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYear/index.js' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonth/index.js' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYear/index.js' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDays/index.js' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHours/index.js' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYears/index.js' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonths/index.js' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYears/index.js' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDate/index.js' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDaysWithOptions' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHoursWithOptions' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYearsWithOptions' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMillisecondsWithOptions' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutesWithOptions' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonthsWithOptions' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuartersWithOptions' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSecondsWithOptions' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeksWithOptions' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYearsWithOptions' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexToWithOptions' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestToWithOptions' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAscWithOptions' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDescWithOptions' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYearsWithOptions' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDaysWithOptions' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHoursWithOptions' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYearsWithOptions' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutesWithOptions' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonthsWithOptions' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuartersWithOptions' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSecondsWithOptions' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeksWithOptions' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYearsWithOptions' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWordsWithOptions' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrictWithOptions' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/endOfDayWithOptions' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHourWithOptions' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeekWithOptions' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYearWithOptions' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinuteWithOptions' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonthWithOptions' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarterWithOptions' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecondWithOptions' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeekWithOptions' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYearWithOptions' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/formatWithOptions' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDateWithOptions' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDayWithOptions' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYearWithOptions' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonthWithOptions' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYearWithOptions' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHoursWithOptions' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODayWithOptions' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeekWithOptions' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYearWithOptions' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMillisecondsWithOptions' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutesWithOptions' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonthWithOptions' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervalsWithOptions' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarterWithOptions' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSecondsWithOptions' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTimeWithOptions' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYearWithOptions' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfterWithOptions' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBeforeWithOptions' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDateWithOptions' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqualWithOptions' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFridayWithOptions' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYearWithOptions' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMondayWithOptions' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDayWithOptions' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHourWithOptions' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeekWithOptions' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYearWithOptions' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinuteWithOptions' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonthWithOptions' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarterWithOptions' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecondWithOptions' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeekWithOptions' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYearWithOptions' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturdayWithOptions' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSundayWithOptions' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursdayWithOptions' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesdayWithOptions' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValidWithOptions' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesdayWithOptions' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekendWithOptions' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinIntervalWithOptions' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYearWithOptions' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYearWithOptions' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/maxWithOptions' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/minWithOptions' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parseWithOptions' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDateWithOptions' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDayWithOptions' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYearWithOptions' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHoursWithOptions' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODayWithOptions' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeekWithOptions' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYearWithOptions' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMillisecondsWithOptions' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutesWithOptions' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonthWithOptions' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarterWithOptions' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSecondsWithOptions' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYearWithOptions' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDayWithOptions' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHourWithOptions' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeekWithOptions' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYearWithOptions' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinuteWithOptions' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonthWithOptions' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarterWithOptions' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecondWithOptions' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeekWithOptions' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYearWithOptions' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDaysWithOptions' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHoursWithOptions' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYearsWithOptions' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMillisecondsWithOptions' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutesWithOptions' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonthsWithOptions' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuartersWithOptions' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSecondsWithOptions' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeksWithOptions' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYearsWithOptions' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDateWithOptions' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDaysWithOptions/index' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHoursWithOptions/index' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYearsWithOptions/index' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMillisecondsWithOptions/index' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutesWithOptions/index' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonthsWithOptions/index' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuartersWithOptions/index' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSecondsWithOptions/index' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeksWithOptions/index' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYearsWithOptions/index' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions/index' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexToWithOptions/index' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestToWithOptions/index' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAscWithOptions/index' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDescWithOptions/index' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions/index' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYearsWithOptions/index' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions/index' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions/index' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions/index' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDaysWithOptions/index' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYearsWithOptions/index' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions/index' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonthsWithOptions/index' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYearsWithOptions/index' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWordsWithOptions/index' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrictWithOptions/index' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/endOfDayWithOptions/index' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHourWithOptions/index' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeekWithOptions/index' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYearWithOptions/index' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinuteWithOptions/index' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonthWithOptions/index' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarterWithOptions/index' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecondWithOptions/index' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeekWithOptions/index' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYearWithOptions/index' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/formatWithOptions/index' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDateWithOptions/index' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDayWithOptions/index' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYearWithOptions/index' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonthWithOptions/index' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYearWithOptions/index' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHoursWithOptions/index' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODayWithOptions/index' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeekWithOptions/index' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions/index' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYearWithOptions/index' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMillisecondsWithOptions/index' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutesWithOptions/index' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonthWithOptions/index' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarterWithOptions/index' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSecondsWithOptions/index' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTimeWithOptions/index' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYearWithOptions/index' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfterWithOptions/index' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBeforeWithOptions/index' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDateWithOptions/index' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqualWithOptions/index' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions/index' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFridayWithOptions/index' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions/index' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYearWithOptions/index' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMondayWithOptions/index' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDayWithOptions/index' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHourWithOptions/index' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeekWithOptions/index' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYearWithOptions/index' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinuteWithOptions/index' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonthWithOptions/index' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarterWithOptions/index' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecondWithOptions/index' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeekWithOptions/index' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYearWithOptions/index' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturdayWithOptions/index' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSundayWithOptions/index' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursdayWithOptions/index' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesdayWithOptions/index' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValidWithOptions/index' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesdayWithOptions/index' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekendWithOptions/index' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinIntervalWithOptions/index' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions/index' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYearWithOptions/index' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions/index' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYearWithOptions/index' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/maxWithOptions/index' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/minWithOptions/index' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parseWithOptions/index' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDateWithOptions/index' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDayWithOptions/index' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYearWithOptions/index' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHoursWithOptions/index' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODayWithOptions/index' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeekWithOptions/index' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYearWithOptions/index' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMillisecondsWithOptions/index' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutesWithOptions/index' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonthWithOptions/index' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarterWithOptions/index' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSecondsWithOptions/index' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYearWithOptions/index' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDayWithOptions/index' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHourWithOptions/index' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeekWithOptions/index' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYearWithOptions/index' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinuteWithOptions/index' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonthWithOptions/index' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarterWithOptions/index' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecondWithOptions/index' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeekWithOptions/index' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYearWithOptions/index' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDaysWithOptions/index' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHoursWithOptions/index' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYearsWithOptions/index' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMillisecondsWithOptions/index' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutesWithOptions/index' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonthsWithOptions/index' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuartersWithOptions/index' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSecondsWithOptions/index' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeksWithOptions/index' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYearsWithOptions/index' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDateWithOptions/index' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

declare module 'date-fns/fp/addDaysWithOptions/index.js' {
  import {addDays} from 'date-fns/fp'
  export = addDays
}

declare module 'date-fns/fp/addHoursWithOptions/index.js' {
  import {addHours} from 'date-fns/fp'
  export = addHours
}

declare module 'date-fns/fp/addISOYearsWithOptions/index.js' {
  import {addISOYears} from 'date-fns/fp'
  export = addISOYears
}

declare module 'date-fns/fp/addMillisecondsWithOptions/index.js' {
  import {addMilliseconds} from 'date-fns/fp'
  export = addMilliseconds
}

declare module 'date-fns/fp/addMinutesWithOptions/index.js' {
  import {addMinutes} from 'date-fns/fp'
  export = addMinutes
}

declare module 'date-fns/fp/addMonthsWithOptions/index.js' {
  import {addMonths} from 'date-fns/fp'
  export = addMonths
}

declare module 'date-fns/fp/addQuartersWithOptions/index.js' {
  import {addQuarters} from 'date-fns/fp'
  export = addQuarters
}

declare module 'date-fns/fp/addSecondsWithOptions/index.js' {
  import {addSeconds} from 'date-fns/fp'
  export = addSeconds
}

declare module 'date-fns/fp/addWeeksWithOptions/index.js' {
  import {addWeeks} from 'date-fns/fp'
  export = addWeeks
}

declare module 'date-fns/fp/addYearsWithOptions/index.js' {
  import {addYears} from 'date-fns/fp'
  export = addYears
}

declare module 'date-fns/fp/areIntervalsOverlappingWithOptions/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/fp'
  export = areIntervalsOverlapping
}

declare module 'date-fns/fp/closestIndexToWithOptions/index.js' {
  import {closestIndexTo} from 'date-fns/fp'
  export = closestIndexTo
}

declare module 'date-fns/fp/closestToWithOptions/index.js' {
  import {closestTo} from 'date-fns/fp'
  export = closestTo
}

declare module 'date-fns/fp/compareAscWithOptions/index.js' {
  import {compareAsc} from 'date-fns/fp'
  export = compareAsc
}

declare module 'date-fns/fp/compareDescWithOptions/index.js' {
  import {compareDesc} from 'date-fns/fp'
  export = compareDesc
}

declare module 'date-fns/fp/differenceInCalendarDaysWithOptions/index.js' {
  import {differenceInCalendarDays} from 'date-fns/fp'
  export = differenceInCalendarDays
}

declare module 'date-fns/fp/differenceInCalendarISOWeeksWithOptions/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/fp'
  export = differenceInCalendarISOWeeks
}

declare module 'date-fns/fp/differenceInCalendarISOYearsWithOptions/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/fp'
  export = differenceInCalendarISOYears
}

declare module 'date-fns/fp/differenceInCalendarMonthsWithOptions/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/fp'
  export = differenceInCalendarMonths
}

declare module 'date-fns/fp/differenceInCalendarQuartersWithOptions/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/fp'
  export = differenceInCalendarQuarters
}

declare module 'date-fns/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/fp'
  export = differenceInCalendarWeeks
}

declare module 'date-fns/fp/differenceInCalendarYearsWithOptions/index.js' {
  import {differenceInCalendarYears} from 'date-fns/fp'
  export = differenceInCalendarYears
}

declare module 'date-fns/fp/differenceInDaysWithOptions/index.js' {
  import {differenceInDays} from 'date-fns/fp'
  export = differenceInDays
}

declare module 'date-fns/fp/differenceInHoursWithOptions/index.js' {
  import {differenceInHours} from 'date-fns/fp'
  export = differenceInHours
}

declare module 'date-fns/fp/differenceInISOYearsWithOptions/index.js' {
  import {differenceInISOYears} from 'date-fns/fp'
  export = differenceInISOYears
}

declare module 'date-fns/fp/differenceInMillisecondsWithOptions/index.js' {
  import {differenceInMilliseconds} from 'date-fns/fp'
  export = differenceInMilliseconds
}

declare module 'date-fns/fp/differenceInMinutesWithOptions/index.js' {
  import {differenceInMinutes} from 'date-fns/fp'
  export = differenceInMinutes
}

declare module 'date-fns/fp/differenceInMonthsWithOptions/index.js' {
  import {differenceInMonths} from 'date-fns/fp'
  export = differenceInMonths
}

declare module 'date-fns/fp/differenceInQuartersWithOptions/index.js' {
  import {differenceInQuarters} from 'date-fns/fp'
  export = differenceInQuarters
}

declare module 'date-fns/fp/differenceInSecondsWithOptions/index.js' {
  import {differenceInSeconds} from 'date-fns/fp'
  export = differenceInSeconds
}

declare module 'date-fns/fp/differenceInWeeksWithOptions/index.js' {
  import {differenceInWeeks} from 'date-fns/fp'
  export = differenceInWeeks
}

declare module 'date-fns/fp/differenceInYearsWithOptions/index.js' {
  import {differenceInYears} from 'date-fns/fp'
  export = differenceInYears
}

declare module 'date-fns/fp/distanceInWordsWithOptions/index.js' {
  import {distanceInWords} from 'date-fns/fp'
  export = distanceInWords
}

declare module 'date-fns/fp/distanceInWordsStrictWithOptions/index.js' {
  import {distanceInWordsStrict} from 'date-fns/fp'
  export = distanceInWordsStrict
}

declare module 'date-fns/fp/eachDayOfIntervalWithOptions/index.js' {
  import {eachDayOfInterval} from 'date-fns/fp'
  export = eachDayOfInterval
}

declare module 'date-fns/fp/endOfDayWithOptions/index.js' {
  import {endOfDay} from 'date-fns/fp'
  export = endOfDay
}

declare module 'date-fns/fp/endOfHourWithOptions/index.js' {
  import {endOfHour} from 'date-fns/fp'
  export = endOfHour
}

declare module 'date-fns/fp/endOfISOWeekWithOptions/index.js' {
  import {endOfISOWeek} from 'date-fns/fp'
  export = endOfISOWeek
}

declare module 'date-fns/fp/endOfISOYearWithOptions/index.js' {
  import {endOfISOYear} from 'date-fns/fp'
  export = endOfISOYear
}

declare module 'date-fns/fp/endOfMinuteWithOptions/index.js' {
  import {endOfMinute} from 'date-fns/fp'
  export = endOfMinute
}

declare module 'date-fns/fp/endOfMonthWithOptions/index.js' {
  import {endOfMonth} from 'date-fns/fp'
  export = endOfMonth
}

declare module 'date-fns/fp/endOfQuarterWithOptions/index.js' {
  import {endOfQuarter} from 'date-fns/fp'
  export = endOfQuarter
}

declare module 'date-fns/fp/endOfSecondWithOptions/index.js' {
  import {endOfSecond} from 'date-fns/fp'
  export = endOfSecond
}

declare module 'date-fns/fp/endOfWeekWithOptions/index.js' {
  import {endOfWeek} from 'date-fns/fp'
  export = endOfWeek
}

declare module 'date-fns/fp/endOfYearWithOptions/index.js' {
  import {endOfYear} from 'date-fns/fp'
  export = endOfYear
}

declare module 'date-fns/fp/formatWithOptions/index.js' {
  import {format} from 'date-fns/fp'
  export = format
}

declare module 'date-fns/fp/getDateWithOptions/index.js' {
  import {getDate} from 'date-fns/fp'
  export = getDate
}

declare module 'date-fns/fp/getDayWithOptions/index.js' {
  import {getDay} from 'date-fns/fp'
  export = getDay
}

declare module 'date-fns/fp/getDayOfYearWithOptions/index.js' {
  import {getDayOfYear} from 'date-fns/fp'
  export = getDayOfYear
}

declare module 'date-fns/fp/getDaysInMonthWithOptions/index.js' {
  import {getDaysInMonth} from 'date-fns/fp'
  export = getDaysInMonth
}

declare module 'date-fns/fp/getDaysInYearWithOptions/index.js' {
  import {getDaysInYear} from 'date-fns/fp'
  export = getDaysInYear
}

declare module 'date-fns/fp/getHoursWithOptions/index.js' {
  import {getHours} from 'date-fns/fp'
  export = getHours
}

declare module 'date-fns/fp/getISODayWithOptions/index.js' {
  import {getISODay} from 'date-fns/fp'
  export = getISODay
}

declare module 'date-fns/fp/getISOWeekWithOptions/index.js' {
  import {getISOWeek} from 'date-fns/fp'
  export = getISOWeek
}

declare module 'date-fns/fp/getISOWeeksInYearWithOptions/index.js' {
  import {getISOWeeksInYear} from 'date-fns/fp'
  export = getISOWeeksInYear
}

declare module 'date-fns/fp/getISOYearWithOptions/index.js' {
  import {getISOYear} from 'date-fns/fp'
  export = getISOYear
}

declare module 'date-fns/fp/getMillisecondsWithOptions/index.js' {
  import {getMilliseconds} from 'date-fns/fp'
  export = getMilliseconds
}

declare module 'date-fns/fp/getMinutesWithOptions/index.js' {
  import {getMinutes} from 'date-fns/fp'
  export = getMinutes
}

declare module 'date-fns/fp/getMonthWithOptions/index.js' {
  import {getMonth} from 'date-fns/fp'
  export = getMonth
}

declare module 'date-fns/fp/getOverlappingDaysInIntervalsWithOptions/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/fp'
  export = getOverlappingDaysInIntervals
}

declare module 'date-fns/fp/getQuarterWithOptions/index.js' {
  import {getQuarter} from 'date-fns/fp'
  export = getQuarter
}

declare module 'date-fns/fp/getSecondsWithOptions/index.js' {
  import {getSeconds} from 'date-fns/fp'
  export = getSeconds
}

declare module 'date-fns/fp/getTimeWithOptions/index.js' {
  import {getTime} from 'date-fns/fp'
  export = getTime
}

declare module 'date-fns/fp/getYearWithOptions/index.js' {
  import {getYear} from 'date-fns/fp'
  export = getYear
}

declare module 'date-fns/fp/isAfterWithOptions/index.js' {
  import {isAfter} from 'date-fns/fp'
  export = isAfter
}

declare module 'date-fns/fp/isBeforeWithOptions/index.js' {
  import {isBefore} from 'date-fns/fp'
  export = isBefore
}

declare module 'date-fns/fp/isDateWithOptions/index.js' {
  import {isDate} from 'date-fns/fp'
  export = isDate
}

declare module 'date-fns/fp/isEqualWithOptions/index.js' {
  import {isEqual} from 'date-fns/fp'
  export = isEqual
}

declare module 'date-fns/fp/isFirstDayOfMonthWithOptions/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/fp'
  export = isFirstDayOfMonth
}

declare module 'date-fns/fp/isFridayWithOptions/index.js' {
  import {isFriday} from 'date-fns/fp'
  export = isFriday
}

declare module 'date-fns/fp/isLastDayOfMonthWithOptions/index.js' {
  import {isLastDayOfMonth} from 'date-fns/fp'
  export = isLastDayOfMonth
}

declare module 'date-fns/fp/isLeapYearWithOptions/index.js' {
  import {isLeapYear} from 'date-fns/fp'
  export = isLeapYear
}

declare module 'date-fns/fp/isMondayWithOptions/index.js' {
  import {isMonday} from 'date-fns/fp'
  export = isMonday
}

declare module 'date-fns/fp/isSameDayWithOptions/index.js' {
  import {isSameDay} from 'date-fns/fp'
  export = isSameDay
}

declare module 'date-fns/fp/isSameHourWithOptions/index.js' {
  import {isSameHour} from 'date-fns/fp'
  export = isSameHour
}

declare module 'date-fns/fp/isSameISOWeekWithOptions/index.js' {
  import {isSameISOWeek} from 'date-fns/fp'
  export = isSameISOWeek
}

declare module 'date-fns/fp/isSameISOYearWithOptions/index.js' {
  import {isSameISOYear} from 'date-fns/fp'
  export = isSameISOYear
}

declare module 'date-fns/fp/isSameMinuteWithOptions/index.js' {
  import {isSameMinute} from 'date-fns/fp'
  export = isSameMinute
}

declare module 'date-fns/fp/isSameMonthWithOptions/index.js' {
  import {isSameMonth} from 'date-fns/fp'
  export = isSameMonth
}

declare module 'date-fns/fp/isSameQuarterWithOptions/index.js' {
  import {isSameQuarter} from 'date-fns/fp'
  export = isSameQuarter
}

declare module 'date-fns/fp/isSameSecondWithOptions/index.js' {
  import {isSameSecond} from 'date-fns/fp'
  export = isSameSecond
}

declare module 'date-fns/fp/isSameWeekWithOptions/index.js' {
  import {isSameWeek} from 'date-fns/fp'
  export = isSameWeek
}

declare module 'date-fns/fp/isSameYearWithOptions/index.js' {
  import {isSameYear} from 'date-fns/fp'
  export = isSameYear
}

declare module 'date-fns/fp/isSaturdayWithOptions/index.js' {
  import {isSaturday} from 'date-fns/fp'
  export = isSaturday
}

declare module 'date-fns/fp/isSundayWithOptions/index.js' {
  import {isSunday} from 'date-fns/fp'
  export = isSunday
}

declare module 'date-fns/fp/isThursdayWithOptions/index.js' {
  import {isThursday} from 'date-fns/fp'
  export = isThursday
}

declare module 'date-fns/fp/isTuesdayWithOptions/index.js' {
  import {isTuesday} from 'date-fns/fp'
  export = isTuesday
}

declare module 'date-fns/fp/isValidWithOptions/index.js' {
  import {isValid} from 'date-fns/fp'
  export = isValid
}

declare module 'date-fns/fp/isWednesdayWithOptions/index.js' {
  import {isWednesday} from 'date-fns/fp'
  export = isWednesday
}

declare module 'date-fns/fp/isWeekendWithOptions/index.js' {
  import {isWeekend} from 'date-fns/fp'
  export = isWeekend
}

declare module 'date-fns/fp/isWithinIntervalWithOptions/index.js' {
  import {isWithinInterval} from 'date-fns/fp'
  export = isWithinInterval
}

declare module 'date-fns/fp/lastDayOfISOWeekWithOptions/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/fp'
  export = lastDayOfISOWeek
}

declare module 'date-fns/fp/lastDayOfISOYearWithOptions/index.js' {
  import {lastDayOfISOYear} from 'date-fns/fp'
  export = lastDayOfISOYear
}

declare module 'date-fns/fp/lastDayOfMonthWithOptions/index.js' {
  import {lastDayOfMonth} from 'date-fns/fp'
  export = lastDayOfMonth
}

declare module 'date-fns/fp/lastDayOfQuarterWithOptions/index.js' {
  import {lastDayOfQuarter} from 'date-fns/fp'
  export = lastDayOfQuarter
}

declare module 'date-fns/fp/lastDayOfWeekWithOptions/index.js' {
  import {lastDayOfWeek} from 'date-fns/fp'
  export = lastDayOfWeek
}

declare module 'date-fns/fp/lastDayOfYearWithOptions/index.js' {
  import {lastDayOfYear} from 'date-fns/fp'
  export = lastDayOfYear
}

declare module 'date-fns/fp/maxWithOptions/index.js' {
  import {max} from 'date-fns/fp'
  export = max
}

declare module 'date-fns/fp/minWithOptions/index.js' {
  import {min} from 'date-fns/fp'
  export = min
}

declare module 'date-fns/fp/parseWithOptions/index.js' {
  import {parse} from 'date-fns/fp'
  export = parse
}

declare module 'date-fns/fp/setDateWithOptions/index.js' {
  import {setDate} from 'date-fns/fp'
  export = setDate
}

declare module 'date-fns/fp/setDayWithOptions/index.js' {
  import {setDay} from 'date-fns/fp'
  export = setDay
}

declare module 'date-fns/fp/setDayOfYearWithOptions/index.js' {
  import {setDayOfYear} from 'date-fns/fp'
  export = setDayOfYear
}

declare module 'date-fns/fp/setHoursWithOptions/index.js' {
  import {setHours} from 'date-fns/fp'
  export = setHours
}

declare module 'date-fns/fp/setISODayWithOptions/index.js' {
  import {setISODay} from 'date-fns/fp'
  export = setISODay
}

declare module 'date-fns/fp/setISOWeekWithOptions/index.js' {
  import {setISOWeek} from 'date-fns/fp'
  export = setISOWeek
}

declare module 'date-fns/fp/setISOYearWithOptions/index.js' {
  import {setISOYear} from 'date-fns/fp'
  export = setISOYear
}

declare module 'date-fns/fp/setMillisecondsWithOptions/index.js' {
  import {setMilliseconds} from 'date-fns/fp'
  export = setMilliseconds
}

declare module 'date-fns/fp/setMinutesWithOptions/index.js' {
  import {setMinutes} from 'date-fns/fp'
  export = setMinutes
}

declare module 'date-fns/fp/setMonthWithOptions/index.js' {
  import {setMonth} from 'date-fns/fp'
  export = setMonth
}

declare module 'date-fns/fp/setQuarterWithOptions/index.js' {
  import {setQuarter} from 'date-fns/fp'
  export = setQuarter
}

declare module 'date-fns/fp/setSecondsWithOptions/index.js' {
  import {setSeconds} from 'date-fns/fp'
  export = setSeconds
}

declare module 'date-fns/fp/setYearWithOptions/index.js' {
  import {setYear} from 'date-fns/fp'
  export = setYear
}

declare module 'date-fns/fp/startOfDayWithOptions/index.js' {
  import {startOfDay} from 'date-fns/fp'
  export = startOfDay
}

declare module 'date-fns/fp/startOfHourWithOptions/index.js' {
  import {startOfHour} from 'date-fns/fp'
  export = startOfHour
}

declare module 'date-fns/fp/startOfISOWeekWithOptions/index.js' {
  import {startOfISOWeek} from 'date-fns/fp'
  export = startOfISOWeek
}

declare module 'date-fns/fp/startOfISOYearWithOptions/index.js' {
  import {startOfISOYear} from 'date-fns/fp'
  export = startOfISOYear
}

declare module 'date-fns/fp/startOfMinuteWithOptions/index.js' {
  import {startOfMinute} from 'date-fns/fp'
  export = startOfMinute
}

declare module 'date-fns/fp/startOfMonthWithOptions/index.js' {
  import {startOfMonth} from 'date-fns/fp'
  export = startOfMonth
}

declare module 'date-fns/fp/startOfQuarterWithOptions/index.js' {
  import {startOfQuarter} from 'date-fns/fp'
  export = startOfQuarter
}

declare module 'date-fns/fp/startOfSecondWithOptions/index.js' {
  import {startOfSecond} from 'date-fns/fp'
  export = startOfSecond
}

declare module 'date-fns/fp/startOfWeekWithOptions/index.js' {
  import {startOfWeek} from 'date-fns/fp'
  export = startOfWeek
}

declare module 'date-fns/fp/startOfYearWithOptions/index.js' {
  import {startOfYear} from 'date-fns/fp'
  export = startOfYear
}

declare module 'date-fns/fp/subDaysWithOptions/index.js' {
  import {subDays} from 'date-fns/fp'
  export = subDays
}

declare module 'date-fns/fp/subHoursWithOptions/index.js' {
  import {subHours} from 'date-fns/fp'
  export = subHours
}

declare module 'date-fns/fp/subISOYearsWithOptions/index.js' {
  import {subISOYears} from 'date-fns/fp'
  export = subISOYears
}

declare module 'date-fns/fp/subMillisecondsWithOptions/index.js' {
  import {subMilliseconds} from 'date-fns/fp'
  export = subMilliseconds
}

declare module 'date-fns/fp/subMinutesWithOptions/index.js' {
  import {subMinutes} from 'date-fns/fp'
  export = subMinutes
}

declare module 'date-fns/fp/subMonthsWithOptions/index.js' {
  import {subMonths} from 'date-fns/fp'
  export = subMonths
}

declare module 'date-fns/fp/subQuartersWithOptions/index.js' {
  import {subQuarters} from 'date-fns/fp'
  export = subQuarters
}

declare module 'date-fns/fp/subSecondsWithOptions/index.js' {
  import {subSeconds} from 'date-fns/fp'
  export = subSeconds
}

declare module 'date-fns/fp/subWeeksWithOptions/index.js' {
  import {subWeeks} from 'date-fns/fp'
  export = subWeeks
}

declare module 'date-fns/fp/subYearsWithOptions/index.js' {
  import {subYears} from 'date-fns/fp'
  export = subYears
}

declare module 'date-fns/fp/toDateWithOptions/index.js' {
  import {toDate} from 'date-fns/fp'
  export = toDate
}

// ECMAScript Module Functions

declare module 'date-fns/esm' {
  function addDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addDays {}

  function addHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addHours {}

  function addISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addISOYears {}

  function addMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMilliseconds {}

  function addMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMinutes {}

  function addMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addMonths {}

  function addQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addQuarters {}

  function addSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addSeconds {}

  function addWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addWeeks {}

  function addYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace addYears {}

  function areIntervalsOverlapping (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): boolean
  namespace areIntervalsOverlapping {}

  function closestIndexTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): number
  namespace closestIndexTo {}

  function closestTo (
    dateToCompare: Date | string | number,
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace closestTo {}

  function compareAsc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareAsc {}

  function compareDesc (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace compareDesc {}

  function differenceInCalendarDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInDays {}

  function differenceInHours (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInHours {}

  function differenceInISOYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInISOYears {}

  function differenceInMilliseconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInWeeks {}

  function differenceInYears (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): number
  namespace differenceInYears {}

  function distanceInWords (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWords {}

  function distanceInWordsStrict (
    dateToCompare: Date | string | number,
    date: Date | string | number,
    options?: Options
  ): string
  namespace distanceInWordsStrict {}

  function eachDayOfInterval (
    interval: Interval,
    options?: Options
  ): Date[]
  namespace eachDayOfInterval {}

  function endOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfDay {}

  function endOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfHour {}

  function endOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOWeek {}

  function endOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfISOYear {}

  function endOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMinute {}

  function endOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfMonth {}

  function endOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfQuarter {}

  function endOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfSecond {}

  function endOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfWeek {}

  function endOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace endOfYear {}

  function format (
    date: Date | string | number,
    format: string,
    options?: Options
  ): string
  namespace format {}

  function getDate (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDate {}

  function getDay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDay {}

  function getDayOfYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDayOfYear {}

  function getDaysInMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInMonth {}

  function getDaysInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getDaysInYear {}

  function getHours (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getHours {}

  function getISODay (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISODay {}

  function getISOWeek (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeek {}

  function getISOWeeksInYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOWeeksInYear {}

  function getISOYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getISOYear {}

  function getMilliseconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMilliseconds {}

  function getMinutes (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMinutes {}

  function getMonth (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals (
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: Options
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getQuarter {}

  function getSeconds (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getSeconds {}

  function getTime (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getTime {}

  function getYear (
    date: Date | string | number,
    options?: Options
  ): number
  namespace getYear {}

  function isAfter (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isAfter {}

  function isBefore (
    date: Date | string | number,
    dateToCompare: Date | string | number,
    options?: Options
  ): boolean
  namespace isBefore {}

  function isDate (
    argument: any,
    options?: Options
  ): boolean
  namespace isDate {}

  function isEqual (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isEqual {}

  function isFirstDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFirstDayOfMonth {}

  function isFriday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isFriday {}

  function isLastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isLeapYear {}

  function isMonday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isMonday {}

  function isSameDay (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameDay {}

  function isSameHour (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameISOYear {}

  function isSameMinute (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMinute {}

  function isSameMonth (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameSecond {}

  function isSameWeek (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameWeek {}

  function isSameYear (
    dateLeft: Date | string | number,
    dateRight: Date | string | number,
    options?: Options
  ): boolean
  namespace isSameYear {}

  function isSaturday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSaturday {}

  function isSunday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isSunday {}

  function isThursday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isThursday {}

  function isTuesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isTuesday {}

  function isValid (
    date: Date,
    options?: Options
  ): boolean
  namespace isValid {}

  function isWednesday (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWednesday {}

  function isWeekend (
    date: Date | string | number,
    options?: Options
  ): boolean
  namespace isWeekend {}

  function isWithinInterval (
    date: Date | string | number,
    interval: Interval,
    options?: Options
  ): boolean
  namespace isWithinInterval {}

  function lastDayOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfISOYear {}

  function lastDayOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace lastDayOfYear {}

  function max (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace max {}

  function min (
    datesArray: (Date | string | number)[],
    options?: Options
  ): Date
  namespace min {}

  function parse (
    dateString: string,
    formatString: string,
    baseDate: Date | string | number,
    options?: Options
  ): Date
  namespace parse {}

  function setDate (
    date: Date | string | number,
    dayOfMonth: number,
    options?: Options
  ): Date
  namespace setDate {}

  function setDay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setDay {}

  function setDayOfYear (
    date: Date | string | number,
    dayOfYear: number,
    options?: Options
  ): Date
  namespace setDayOfYear {}

  function setHours (
    date: Date | string | number,
    hours: number,
    options?: Options
  ): Date
  namespace setHours {}

  function setISODay (
    date: Date | string | number,
    day: number,
    options?: Options
  ): Date
  namespace setISODay {}

  function setISOWeek (
    date: Date | string | number,
    isoWeek: number,
    options?: Options
  ): Date
  namespace setISOWeek {}

  function setISOYear (
    date: Date | string | number,
    isoYear: number,
    options?: Options
  ): Date
  namespace setISOYear {}

  function setMilliseconds (
    date: Date | string | number,
    milliseconds: number,
    options?: Options
  ): Date
  namespace setMilliseconds {}

  function setMinutes (
    date: Date | string | number,
    minutes: number,
    options?: Options
  ): Date
  namespace setMinutes {}

  function setMonth (
    date: Date | string | number,
    month: number,
    options?: Options
  ): Date
  namespace setMonth {}

  function setQuarter (
    date: Date | string | number,
    quarter: number,
    options?: Options
  ): Date
  namespace setQuarter {}

  function setSeconds (
    date: Date | string | number,
    seconds: number,
    options?: Options
  ): Date
  namespace setSeconds {}

  function setYear (
    date: Date | string | number,
    year: number,
    options?: Options
  ): Date
  namespace setYear {}

  function startOfDay (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfDay {}

  function startOfHour (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfHour {}

  function startOfISOWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOWeek {}

  function startOfISOYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfISOYear {}

  function startOfMinute (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMinute {}

  function startOfMonth (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfMonth {}

  function startOfQuarter (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfQuarter {}

  function startOfSecond (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfSecond {}

  function startOfWeek (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfWeek {}

  function startOfYear (
    date: Date | string | number,
    options?: Options
  ): Date
  namespace startOfYear {}

  function subDays (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subDays {}

  function subHours (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subHours {}

  function subISOYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subISOYears {}

  function subMilliseconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMilliseconds {}

  function subMinutes (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMinutes {}

  function subMonths (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subMonths {}

  function subQuarters (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subQuarters {}

  function subSeconds (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subSeconds {}

  function subWeeks (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subWeeks {}

  function subYears (
    date: Date | string | number,
    amount: number,
    options?: Options
  ): Date
  namespace subYears {}

  function toDate (
    argument: Date | string | number,
    options?: Options
  ): Date
  namespace toDate {}
}

declare module 'date-fns/esm/addDays' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOYears' {
  import {addISOYears} from 'date-fns/esm'
  export default addISOYears
}

declare module 'date-fns/esm/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns/esm'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns/esm'
  export default differenceInISOYears
}

declare module 'date-fns/esm/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/distanceInWords' {
  import {distanceInWords} from 'date-fns/esm'
  export default distanceInWords
}

declare module 'date-fns/esm/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns/esm'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/endOfDay' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOYear' {
  import {endOfISOYear} from 'date-fns/esm'
  export default endOfISOYear
}

declare module 'date-fns/esm/endOfMinute' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/getDate' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOYear' {
  import {getISOYear} from 'date-fns/esm'
  export default getISOYear
}

declare module 'date-fns/esm/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getYear' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOYear' {
  import {isSameISOYear} from 'date-fns/esm'
  export default isSameISOYear
}

declare module 'date-fns/esm/isSameMinute' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns/esm'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOYear' {
  import {setISOYear} from 'date-fns/esm'
  export default setISOYear
}

declare module 'date-fns/esm/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setYear' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOYear' {
  import {startOfISOYear} from 'date-fns/esm'
  export default startOfISOYear
}

declare module 'date-fns/esm/startOfMinute' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfYear' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOYears' {
  import {subISOYears} from 'date-fns/esm'
  export default subISOYears
}

declare module 'date-fns/esm/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addDays/index' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOYears/index' {
  import {addISOYears} from 'date-fns/esm'
  export default addISOYears
}

declare module 'date-fns/esm/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns/esm'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns/esm'
  export default differenceInISOYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/distanceInWords/index' {
  import {distanceInWords} from 'date-fns/esm'
  export default distanceInWords
}

declare module 'date-fns/esm/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns/esm'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/endOfDay/index' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour/index' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns/esm'
  export default endOfISOYear
}

declare module 'date-fns/esm/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format/index' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/getDate/index' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours/index' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOYear/index' {
  import {getISOYear} from 'date-fns/esm'
  export default getISOYear
}

declare module 'date-fns/esm/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getYear/index' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay/index' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns/esm'
  export default isSameISOYear
}

declare module 'date-fns/esm/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday/index' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday/index' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns/esm'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max/index' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate/index' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOYear/index' {
  import {setISOYear} from 'date-fns/esm'
  export default setISOYear
}

declare module 'date-fns/esm/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setYear/index' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour/index' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns/esm'
  export default startOfISOYear
}

declare module 'date-fns/esm/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfYear/index' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays/index' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOYears/index' {
  import {subISOYears} from 'date-fns/esm'
  export default subISOYears
}

declare module 'date-fns/esm/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

declare module 'date-fns/esm/addDays/index.js' {
  import {addDays} from 'date-fns/esm'
  export default addDays
}

declare module 'date-fns/esm/addHours/index.js' {
  import {addHours} from 'date-fns/esm'
  export default addHours
}

declare module 'date-fns/esm/addISOYears/index.js' {
  import {addISOYears} from 'date-fns/esm'
  export default addISOYears
}

declare module 'date-fns/esm/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/esm'
  export default addMilliseconds
}

declare module 'date-fns/esm/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/esm'
  export default addMinutes
}

declare module 'date-fns/esm/addMonths/index.js' {
  import {addMonths} from 'date-fns/esm'
  export default addMonths
}

declare module 'date-fns/esm/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/esm'
  export default addQuarters
}

declare module 'date-fns/esm/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/esm'
  export default addSeconds
}

declare module 'date-fns/esm/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/esm'
  export default addWeeks
}

declare module 'date-fns/esm/addYears/index.js' {
  import {addYears} from 'date-fns/esm'
  export default addYears
}

declare module 'date-fns/esm/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/esm'
  export default closestIndexTo
}

declare module 'date-fns/esm/closestTo/index.js' {
  import {closestTo} from 'date-fns/esm'
  export default closestTo
}

declare module 'date-fns/esm/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/esm'
  export default compareAsc
}

declare module 'date-fns/esm/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/esm'
  export default compareDesc
}

declare module 'date-fns/esm/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/esm'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/esm'
  export default differenceInDays
}

declare module 'date-fns/esm/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/esm'
  export default differenceInHours
}

declare module 'date-fns/esm/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns/esm'
  export default differenceInISOYears
}

declare module 'date-fns/esm/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/esm'
  export default differenceInMinutes
}

declare module 'date-fns/esm/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/esm'
  export default differenceInMonths
}

declare module 'date-fns/esm/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/esm'
  export default differenceInQuarters
}

declare module 'date-fns/esm/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/esm'
  export default differenceInSeconds
}

declare module 'date-fns/esm/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/esm'
  export default differenceInWeeks
}

declare module 'date-fns/esm/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/esm'
  export default differenceInYears
}

declare module 'date-fns/esm/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns/esm'
  export default distanceInWords
}

declare module 'date-fns/esm/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns/esm'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/esm'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/esm'
  export default endOfDay
}

declare module 'date-fns/esm/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/esm'
  export default endOfHour
}

declare module 'date-fns/esm/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/esm'
  export default endOfISOWeek
}

declare module 'date-fns/esm/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns/esm'
  export default endOfISOYear
}

declare module 'date-fns/esm/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/esm'
  export default endOfMinute
}

declare module 'date-fns/esm/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/esm'
  export default endOfMonth
}

declare module 'date-fns/esm/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/esm'
  export default endOfQuarter
}

declare module 'date-fns/esm/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/esm'
  export default endOfSecond
}

declare module 'date-fns/esm/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/esm'
  export default endOfWeek
}

declare module 'date-fns/esm/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/esm'
  export default endOfYear
}

declare module 'date-fns/esm/format/index.js' {
  import {format} from 'date-fns/esm'
  export default format
}

declare module 'date-fns/esm/getDate/index.js' {
  import {getDate} from 'date-fns/esm'
  export default getDate
}

declare module 'date-fns/esm/getDay/index.js' {
  import {getDay} from 'date-fns/esm'
  export default getDay
}

declare module 'date-fns/esm/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/esm'
  export default getDayOfYear
}

declare module 'date-fns/esm/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/esm'
  export default getDaysInMonth
}

declare module 'date-fns/esm/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/esm'
  export default getDaysInYear
}

declare module 'date-fns/esm/getHours/index.js' {
  import {getHours} from 'date-fns/esm'
  export default getHours
}

declare module 'date-fns/esm/getISODay/index.js' {
  import {getISODay} from 'date-fns/esm'
  export default getISODay
}

declare module 'date-fns/esm/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/esm'
  export default getISOWeek
}

declare module 'date-fns/esm/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/getISOYear/index.js' {
  import {getISOYear} from 'date-fns/esm'
  export default getISOYear
}

declare module 'date-fns/esm/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/esm'
  export default getMilliseconds
}

declare module 'date-fns/esm/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/esm'
  export default getMinutes
}

declare module 'date-fns/esm/getMonth/index.js' {
  import {getMonth} from 'date-fns/esm'
  export default getMonth
}

declare module 'date-fns/esm/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/esm'
  export default getQuarter
}

declare module 'date-fns/esm/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/esm'
  export default getSeconds
}

declare module 'date-fns/esm/getTime/index.js' {
  import {getTime} from 'date-fns/esm'
  export default getTime
}

declare module 'date-fns/esm/getYear/index.js' {
  import {getYear} from 'date-fns/esm'
  export default getYear
}

declare module 'date-fns/esm/isAfter/index.js' {
  import {isAfter} from 'date-fns/esm'
  export default isAfter
}

declare module 'date-fns/esm/isBefore/index.js' {
  import {isBefore} from 'date-fns/esm'
  export default isBefore
}

declare module 'date-fns/esm/isDate/index.js' {
  import {isDate} from 'date-fns/esm'
  export default isDate
}

declare module 'date-fns/esm/isEqual/index.js' {
  import {isEqual} from 'date-fns/esm'
  export default isEqual
}

declare module 'date-fns/esm/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/isFriday/index.js' {
  import {isFriday} from 'date-fns/esm'
  export default isFriday
}

declare module 'date-fns/esm/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/esm'
  export default isLeapYear
}

declare module 'date-fns/esm/isMonday/index.js' {
  import {isMonday} from 'date-fns/esm'
  export default isMonday
}

declare module 'date-fns/esm/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/esm'
  export default isSameDay
}

declare module 'date-fns/esm/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/esm'
  export default isSameHour
}

declare module 'date-fns/esm/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/esm'
  export default isSameISOWeek
}

declare module 'date-fns/esm/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns/esm'
  export default isSameISOYear
}

declare module 'date-fns/esm/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/esm'
  export default isSameMinute
}

declare module 'date-fns/esm/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/esm'
  export default isSameMonth
}

declare module 'date-fns/esm/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/esm'
  export default isSameQuarter
}

declare module 'date-fns/esm/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/esm'
  export default isSameSecond
}

declare module 'date-fns/esm/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/esm'
  export default isSameWeek
}

declare module 'date-fns/esm/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/esm'
  export default isSameYear
}

declare module 'date-fns/esm/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/esm'
  export default isSaturday
}

declare module 'date-fns/esm/isSunday/index.js' {
  import {isSunday} from 'date-fns/esm'
  export default isSunday
}

declare module 'date-fns/esm/isThursday/index.js' {
  import {isThursday} from 'date-fns/esm'
  export default isThursday
}

declare module 'date-fns/esm/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/esm'
  export default isTuesday
}

declare module 'date-fns/esm/isValid/index.js' {
  import {isValid} from 'date-fns/esm'
  export default isValid
}

declare module 'date-fns/esm/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/esm'
  export default isWednesday
}

declare module 'date-fns/esm/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/esm'
  export default isWeekend
}

declare module 'date-fns/esm/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/esm'
  export default isWithinInterval
}

declare module 'date-fns/esm/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns/esm'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/esm'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/esm'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/esm'
  export default lastDayOfYear
}

declare module 'date-fns/esm/max/index.js' {
  import {max} from 'date-fns/esm'
  export default max
}

declare module 'date-fns/esm/min/index.js' {
  import {min} from 'date-fns/esm'
  export default min
}

declare module 'date-fns/esm/parse/index.js' {
  import {parse} from 'date-fns/esm'
  export default parse
}

declare module 'date-fns/esm/setDate/index.js' {
  import {setDate} from 'date-fns/esm'
  export default setDate
}

declare module 'date-fns/esm/setDay/index.js' {
  import {setDay} from 'date-fns/esm'
  export default setDay
}

declare module 'date-fns/esm/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/esm'
  export default setDayOfYear
}

declare module 'date-fns/esm/setHours/index.js' {
  import {setHours} from 'date-fns/esm'
  export default setHours
}

declare module 'date-fns/esm/setISODay/index.js' {
  import {setISODay} from 'date-fns/esm'
  export default setISODay
}

declare module 'date-fns/esm/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/esm'
  export default setISOWeek
}

declare module 'date-fns/esm/setISOYear/index.js' {
  import {setISOYear} from 'date-fns/esm'
  export default setISOYear
}

declare module 'date-fns/esm/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/esm'
  export default setMilliseconds
}

declare module 'date-fns/esm/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/esm'
  export default setMinutes
}

declare module 'date-fns/esm/setMonth/index.js' {
  import {setMonth} from 'date-fns/esm'
  export default setMonth
}

declare module 'date-fns/esm/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/esm'
  export default setQuarter
}

declare module 'date-fns/esm/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/esm'
  export default setSeconds
}

declare module 'date-fns/esm/setYear/index.js' {
  import {setYear} from 'date-fns/esm'
  export default setYear
}

declare module 'date-fns/esm/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/esm'
  export default startOfDay
}

declare module 'date-fns/esm/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/esm'
  export default startOfHour
}

declare module 'date-fns/esm/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/esm'
  export default startOfISOWeek
}

declare module 'date-fns/esm/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns/esm'
  export default startOfISOYear
}

declare module 'date-fns/esm/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/esm'
  export default startOfMinute
}

declare module 'date-fns/esm/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/esm'
  export default startOfMonth
}

declare module 'date-fns/esm/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/esm'
  export default startOfQuarter
}

declare module 'date-fns/esm/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/esm'
  export default startOfSecond
}

declare module 'date-fns/esm/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/esm'
  export default startOfWeek
}

declare module 'date-fns/esm/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/esm'
  export default startOfYear
}

declare module 'date-fns/esm/subDays/index.js' {
  import {subDays} from 'date-fns/esm'
  export default subDays
}

declare module 'date-fns/esm/subHours/index.js' {
  import {subHours} from 'date-fns/esm'
  export default subHours
}

declare module 'date-fns/esm/subISOYears/index.js' {
  import {subISOYears} from 'date-fns/esm'
  export default subISOYears
}

declare module 'date-fns/esm/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/esm'
  export default subMilliseconds
}

declare module 'date-fns/esm/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/esm'
  export default subMinutes
}

declare module 'date-fns/esm/subMonths/index.js' {
  import {subMonths} from 'date-fns/esm'
  export default subMonths
}

declare module 'date-fns/esm/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/esm'
  export default subQuarters
}

declare module 'date-fns/esm/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/esm'
  export default subSeconds
}

declare module 'date-fns/esm/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/esm'
  export default subWeeks
}

declare module 'date-fns/esm/subYears/index.js' {
  import {subYears} from 'date-fns/esm'
  export default subYears
}

declare module 'date-fns/esm/toDate/index.js' {
  import {toDate} from 'date-fns/esm'
  export default toDate
}

// ECMAScript Module FP Functions

declare module 'date-fns/esm/fp' {
  let addDays: CurriedFn2<number, Date | string | number, Date>
  namespace addDays {}

  let addHours: CurriedFn2<number, Date | string | number, Date>
  namespace addHours {}

  let addISOYears: CurriedFn2<number, Date | string | number, Date>
  namespace addISOYears {}

  let addMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace addMilliseconds {}

  let addMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace addMinutes {}

  let addMonths: CurriedFn2<number, Date | string | number, Date>
  namespace addMonths {}

  let addQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace addQuarters {}

  let addSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace addSeconds {}

  let addWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace addWeeks {}

  let addYears: CurriedFn2<number, Date | string | number, Date>
  namespace addYears {}

  let areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  let closestIndexTo: CurriedFn2<(Date | string | number)[], Date | string | number, number>
  namespace closestIndexTo {}

  let closestTo: CurriedFn2<(Date | string | number)[], Date | string | number, Date>
  namespace closestTo {}

  let compareAsc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareAsc {}

  let compareDesc: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace compareDesc {}

  let differenceInCalendarDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDays {}

  let differenceInCalendarISOWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeks {}

  let differenceInCalendarISOYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOYears {}

  let differenceInCalendarMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonths {}

  let differenceInCalendarQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuarters {}

  let differenceInCalendarWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeks {}

  let differenceInCalendarYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYears {}

  let differenceInDays: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInDays {}

  let differenceInHours: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInHours {}

  let differenceInISOYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInISOYears {}

  let differenceInMilliseconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMilliseconds {}

  let differenceInMinutes: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMinutes {}

  let differenceInMonths: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInMonths {}

  let differenceInQuarters: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInQuarters {}

  let differenceInSeconds: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInSeconds {}

  let differenceInWeeks: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInWeeks {}

  let differenceInYears: CurriedFn2<Date | string | number, Date | string | number, number>
  namespace differenceInYears {}

  let distanceInWords: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace distanceInWords {}

  let distanceInWordsStrict: CurriedFn2<Date | string | number, Date | string | number, string>
  namespace distanceInWordsStrict {}

  let eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  let endOfDay: CurriedFn1<Date | string | number, Date>
  namespace endOfDay {}

  let endOfHour: CurriedFn1<Date | string | number, Date>
  namespace endOfHour {}

  let endOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfISOWeek {}

  let endOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace endOfISOYear {}

  let endOfMinute: CurriedFn1<Date | string | number, Date>
  namespace endOfMinute {}

  let endOfMonth: CurriedFn1<Date | string | number, Date>
  namespace endOfMonth {}

  let endOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace endOfQuarter {}

  let endOfSecond: CurriedFn1<Date | string | number, Date>
  namespace endOfSecond {}

  let endOfWeek: CurriedFn1<Date | string | number, Date>
  namespace endOfWeek {}

  let endOfYear: CurriedFn1<Date | string | number, Date>
  namespace endOfYear {}

  let format: CurriedFn2<string, Date | string | number, string>
  namespace format {}

  let getDate: CurriedFn1<Date | string | number, number>
  namespace getDate {}

  let getDay: CurriedFn1<Date | string | number, number>
  namespace getDay {}

  let getDayOfYear: CurriedFn1<Date | string | number, number>
  namespace getDayOfYear {}

  let getDaysInMonth: CurriedFn1<Date | string | number, number>
  namespace getDaysInMonth {}

  let getDaysInYear: CurriedFn1<Date | string | number, number>
  namespace getDaysInYear {}

  let getHours: CurriedFn1<Date | string | number, number>
  namespace getHours {}

  let getISODay: CurriedFn1<Date | string | number, number>
  namespace getISODay {}

  let getISOWeek: CurriedFn1<Date | string | number, number>
  namespace getISOWeek {}

  let getISOWeeksInYear: CurriedFn1<Date | string | number, number>
  namespace getISOWeeksInYear {}

  let getISOYear: CurriedFn1<Date | string | number, number>
  namespace getISOYear {}

  let getMilliseconds: CurriedFn1<Date | string | number, number>
  namespace getMilliseconds {}

  let getMinutes: CurriedFn1<Date | string | number, number>
  namespace getMinutes {}

  let getMonth: CurriedFn1<Date | string | number, number>
  namespace getMonth {}

  let getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  let getQuarter: CurriedFn1<Date | string | number, number>
  namespace getQuarter {}

  let getSeconds: CurriedFn1<Date | string | number, number>
  namespace getSeconds {}

  let getTime: CurriedFn1<Date | string | number, number>
  namespace getTime {}

  let getYear: CurriedFn1<Date | string | number, number>
  namespace getYear {}

  let isAfter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isAfter {}

  let isBefore: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isBefore {}

  let isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  let isEqual: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isEqual {}

  let isFirstDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isFirstDayOfMonth {}

  let isFriday: CurriedFn1<Date | string | number, boolean>
  namespace isFriday {}

  let isLastDayOfMonth: CurriedFn1<Date | string | number, boolean>
  namespace isLastDayOfMonth {}

  let isLeapYear: CurriedFn1<Date | string | number, boolean>
  namespace isLeapYear {}

  let isMonday: CurriedFn1<Date | string | number, boolean>
  namespace isMonday {}

  let isSameDay: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameDay {}

  let isSameHour: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameHour {}

  let isSameISOWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeek {}

  let isSameISOYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameISOYear {}

  let isSameMinute: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMinute {}

  let isSameMonth: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameMonth {}

  let isSameQuarter: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameQuarter {}

  let isSameSecond: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameSecond {}

  let isSameWeek: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameWeek {}

  let isSameYear: CurriedFn2<Date | string | number, Date | string | number, boolean>
  namespace isSameYear {}

  let isSaturday: CurriedFn1<Date | string | number, boolean>
  namespace isSaturday {}

  let isSunday: CurriedFn1<Date | string | number, boolean>
  namespace isSunday {}

  let isThursday: CurriedFn1<Date | string | number, boolean>
  namespace isThursday {}

  let isTuesday: CurriedFn1<Date | string | number, boolean>
  namespace isTuesday {}

  let isValid: CurriedFn1<Date, boolean>
  namespace isValid {}

  let isWednesday: CurriedFn1<Date | string | number, boolean>
  namespace isWednesday {}

  let isWeekend: CurriedFn1<Date | string | number, boolean>
  namespace isWeekend {}

  let isWithinInterval: CurriedFn2<Interval, Date | string | number, boolean>
  namespace isWithinInterval {}

  let lastDayOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOWeek {}

  let lastDayOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfISOYear {}

  let lastDayOfMonth: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfMonth {}

  let lastDayOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfQuarter {}

  let lastDayOfWeek: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfWeek {}

  let lastDayOfYear: CurriedFn1<Date | string | number, Date>
  namespace lastDayOfYear {}

  let max: CurriedFn1<(Date | string | number)[], Date>
  namespace max {}

  let min: CurriedFn1<(Date | string | number)[], Date>
  namespace min {}

  let parse: CurriedFn3<Date | string | number, string, string, Date>
  namespace parse {}

  let setDate: CurriedFn2<number, Date | string | number, Date>
  namespace setDate {}

  let setDay: CurriedFn2<number, Date | string | number, Date>
  namespace setDay {}

  let setDayOfYear: CurriedFn2<number, Date | string | number, Date>
  namespace setDayOfYear {}

  let setHours: CurriedFn2<number, Date | string | number, Date>
  namespace setHours {}

  let setISODay: CurriedFn2<number, Date | string | number, Date>
  namespace setISODay {}

  let setISOWeek: CurriedFn2<number, Date | string | number, Date>
  namespace setISOWeek {}

  let setISOYear: CurriedFn2<number, Date | string | number, Date>
  namespace setISOYear {}

  let setMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace setMilliseconds {}

  let setMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace setMinutes {}

  let setMonth: CurriedFn2<number, Date | string | number, Date>
  namespace setMonth {}

  let setQuarter: CurriedFn2<number, Date | string | number, Date>
  namespace setQuarter {}

  let setSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace setSeconds {}

  let setYear: CurriedFn2<number, Date | string | number, Date>
  namespace setYear {}

  let startOfDay: CurriedFn1<Date | string | number, Date>
  namespace startOfDay {}

  let startOfHour: CurriedFn1<Date | string | number, Date>
  namespace startOfHour {}

  let startOfISOWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfISOWeek {}

  let startOfISOYear: CurriedFn1<Date | string | number, Date>
  namespace startOfISOYear {}

  let startOfMinute: CurriedFn1<Date | string | number, Date>
  namespace startOfMinute {}

  let startOfMonth: CurriedFn1<Date | string | number, Date>
  namespace startOfMonth {}

  let startOfQuarter: CurriedFn1<Date | string | number, Date>
  namespace startOfQuarter {}

  let startOfSecond: CurriedFn1<Date | string | number, Date>
  namespace startOfSecond {}

  let startOfWeek: CurriedFn1<Date | string | number, Date>
  namespace startOfWeek {}

  let startOfYear: CurriedFn1<Date | string | number, Date>
  namespace startOfYear {}

  let subDays: CurriedFn2<number, Date | string | number, Date>
  namespace subDays {}

  let subHours: CurriedFn2<number, Date | string | number, Date>
  namespace subHours {}

  let subISOYears: CurriedFn2<number, Date | string | number, Date>
  namespace subISOYears {}

  let subMilliseconds: CurriedFn2<number, Date | string | number, Date>
  namespace subMilliseconds {}

  let subMinutes: CurriedFn2<number, Date | string | number, Date>
  namespace subMinutes {}

  let subMonths: CurriedFn2<number, Date | string | number, Date>
  namespace subMonths {}

  let subQuarters: CurriedFn2<number, Date | string | number, Date>
  namespace subQuarters {}

  let subSeconds: CurriedFn2<number, Date | string | number, Date>
  namespace subSeconds {}

  let subWeeks: CurriedFn2<number, Date | string | number, Date>
  namespace subWeeks {}

  let subYears: CurriedFn2<number, Date | string | number, Date>
  namespace subYears {}

  let toDate: CurriedFn1<Date | string | number, Date>
  namespace toDate {}

  let addDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addDaysWithOptions {}

  let addHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addHoursWithOptions {}

  let addISOYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addISOYearsWithOptions {}

  let addMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMillisecondsWithOptions {}

  let addMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMinutesWithOptions {}

  let addMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addMonthsWithOptions {}

  let addQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addQuartersWithOptions {}

  let addSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addSecondsWithOptions {}

  let addWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addWeeksWithOptions {}

  let addYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace addYearsWithOptions {}

  let areIntervalsOverlappingWithOptions: CurriedFn3<Options, Interval, Interval, boolean>
  namespace areIntervalsOverlappingWithOptions {}

  let closestIndexToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, number>
  namespace closestIndexToWithOptions {}

  let closestToWithOptions: CurriedFn3<Options, (Date | string | number)[], Date | string | number, Date>
  namespace closestToWithOptions {}

  let compareAscWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareAscWithOptions {}

  let compareDescWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace compareDescWithOptions {}

  let differenceInCalendarDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarDaysWithOptions {}

  let differenceInCalendarISOWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOWeeksWithOptions {}

  let differenceInCalendarISOYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarISOYearsWithOptions {}

  let differenceInCalendarMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarMonthsWithOptions {}

  let differenceInCalendarQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarQuartersWithOptions {}

  let differenceInCalendarWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarWeeksWithOptions {}

  let differenceInCalendarYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInCalendarYearsWithOptions {}

  let differenceInDaysWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInDaysWithOptions {}

  let differenceInHoursWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInHoursWithOptions {}

  let differenceInISOYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInISOYearsWithOptions {}

  let differenceInMillisecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMillisecondsWithOptions {}

  let differenceInMinutesWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMinutesWithOptions {}

  let differenceInMonthsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInMonthsWithOptions {}

  let differenceInQuartersWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInQuartersWithOptions {}

  let differenceInSecondsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInSecondsWithOptions {}

  let differenceInWeeksWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInWeeksWithOptions {}

  let differenceInYearsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, number>
  namespace differenceInYearsWithOptions {}

  let distanceInWordsWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace distanceInWordsWithOptions {}

  let distanceInWordsStrictWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, string>
  namespace distanceInWordsStrictWithOptions {}

  let eachDayOfIntervalWithOptions: CurriedFn2<Options, Interval, Date[]>
  namespace eachDayOfIntervalWithOptions {}

  let endOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfDayWithOptions {}

  let endOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfHourWithOptions {}

  let endOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOWeekWithOptions {}

  let endOfISOYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfISOYearWithOptions {}

  let endOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMinuteWithOptions {}

  let endOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfMonthWithOptions {}

  let endOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfQuarterWithOptions {}

  let endOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfSecondWithOptions {}

  let endOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfWeekWithOptions {}

  let endOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace endOfYearWithOptions {}

  let formatWithOptions: CurriedFn3<Options, string, Date | string | number, string>
  namespace formatWithOptions {}

  let getDateWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDateWithOptions {}

  let getDayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayWithOptions {}

  let getDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDayOfYearWithOptions {}

  let getDaysInMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInMonthWithOptions {}

  let getDaysInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getDaysInYearWithOptions {}

  let getHoursWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getHoursWithOptions {}

  let getISODayWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISODayWithOptions {}

  let getISOWeekWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeekWithOptions {}

  let getISOWeeksInYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOWeeksInYearWithOptions {}

  let getISOYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getISOYearWithOptions {}

  let getMillisecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMillisecondsWithOptions {}

  let getMinutesWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMinutesWithOptions {}

  let getMonthWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getMonthWithOptions {}

  let getOverlappingDaysInIntervalsWithOptions: CurriedFn3<Options, Interval, Interval, number>
  namespace getOverlappingDaysInIntervalsWithOptions {}

  let getQuarterWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getQuarterWithOptions {}

  let getSecondsWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getSecondsWithOptions {}

  let getTimeWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getTimeWithOptions {}

  let getYearWithOptions: CurriedFn2<Options, Date | string | number, number>
  namespace getYearWithOptions {}

  let isAfterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isAfterWithOptions {}

  let isBeforeWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isBeforeWithOptions {}

  let isDateWithOptions: CurriedFn2<Options, any, boolean>
  namespace isDateWithOptions {}

  let isEqualWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isEqualWithOptions {}

  let isFirstDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFirstDayOfMonthWithOptions {}

  let isFridayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isFridayWithOptions {}

  let isLastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLastDayOfMonthWithOptions {}

  let isLeapYearWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isLeapYearWithOptions {}

  let isMondayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isMondayWithOptions {}

  let isSameDayWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameDayWithOptions {}

  let isSameHourWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameHourWithOptions {}

  let isSameISOWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOWeekWithOptions {}

  let isSameISOYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameISOYearWithOptions {}

  let isSameMinuteWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMinuteWithOptions {}

  let isSameMonthWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameMonthWithOptions {}

  let isSameQuarterWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameQuarterWithOptions {}

  let isSameSecondWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameSecondWithOptions {}

  let isSameWeekWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameWeekWithOptions {}

  let isSameYearWithOptions: CurriedFn3<Options, Date | string | number, Date | string | number, boolean>
  namespace isSameYearWithOptions {}

  let isSaturdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSaturdayWithOptions {}

  let isSundayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isSundayWithOptions {}

  let isThursdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isThursdayWithOptions {}

  let isTuesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isTuesdayWithOptions {}

  let isValidWithOptions: CurriedFn2<Options, Date, boolean>
  namespace isValidWithOptions {}

  let isWednesdayWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWednesdayWithOptions {}

  let isWeekendWithOptions: CurriedFn2<Options, Date | string | number, boolean>
  namespace isWeekendWithOptions {}

  let isWithinIntervalWithOptions: CurriedFn3<Options, Interval, Date | string | number, boolean>
  namespace isWithinIntervalWithOptions {}

  let lastDayOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOWeekWithOptions {}

  let lastDayOfISOYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfISOYearWithOptions {}

  let lastDayOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfMonthWithOptions {}

  let lastDayOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfQuarterWithOptions {}

  let lastDayOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfWeekWithOptions {}

  let lastDayOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace lastDayOfYearWithOptions {}

  let maxWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace maxWithOptions {}

  let minWithOptions: CurriedFn2<Options, (Date | string | number)[], Date>
  namespace minWithOptions {}

  let parseWithOptions: CurriedFn4<Options, Date | string | number, string, string, Date>
  namespace parseWithOptions {}

  let setDateWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDateWithOptions {}

  let setDayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayWithOptions {}

  let setDayOfYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setDayOfYearWithOptions {}

  let setHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setHoursWithOptions {}

  let setISODayWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISODayWithOptions {}

  let setISOWeekWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOWeekWithOptions {}

  let setISOYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setISOYearWithOptions {}

  let setMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMillisecondsWithOptions {}

  let setMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMinutesWithOptions {}

  let setMonthWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setMonthWithOptions {}

  let setQuarterWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setQuarterWithOptions {}

  let setSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setSecondsWithOptions {}

  let setYearWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace setYearWithOptions {}

  let startOfDayWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfDayWithOptions {}

  let startOfHourWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfHourWithOptions {}

  let startOfISOWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOWeekWithOptions {}

  let startOfISOYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfISOYearWithOptions {}

  let startOfMinuteWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMinuteWithOptions {}

  let startOfMonthWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfMonthWithOptions {}

  let startOfQuarterWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfQuarterWithOptions {}

  let startOfSecondWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfSecondWithOptions {}

  let startOfWeekWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfWeekWithOptions {}

  let startOfYearWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace startOfYearWithOptions {}

  let subDaysWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subDaysWithOptions {}

  let subHoursWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subHoursWithOptions {}

  let subISOYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subISOYearsWithOptions {}

  let subMillisecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMillisecondsWithOptions {}

  let subMinutesWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMinutesWithOptions {}

  let subMonthsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subMonthsWithOptions {}

  let subQuartersWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subQuartersWithOptions {}

  let subSecondsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subSecondsWithOptions {}

  let subWeeksWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subWeeksWithOptions {}

  let subYearsWithOptions: CurriedFn3<Options, number, Date | string | number, Date>
  namespace subYearsWithOptions {}

  let toDateWithOptions: CurriedFn2<Options, Date | string | number, Date>
  namespace toDateWithOptions {}
}

declare module 'date-fns/esm/fp/addDays' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOYears' {
  import {addISOYears} from 'date-fns/esm/fp'
  export default addISOYears
}

declare module 'date-fns/esm/fp/addMilliseconds' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexTo' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInCalendarDays' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOYears' {
  import {differenceInCalendarISOYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarYears' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOYears' {
  import {differenceInISOYears} from 'date-fns/esm/fp'
  export default differenceInISOYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonths' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSeconds' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeks' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYears' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/distanceInWords' {
  import {distanceInWords} from 'date-fns/esm/fp'
  export default distanceInWords
}

declare module 'date-fns/esm/fp/distanceInWordsStrict' {
  import {distanceInWordsStrict} from 'date-fns/esm/fp'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/fp/eachDayOfInterval' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/endOfDay' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfHour' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOYear' {
  import {endOfISOYear} from 'date-fns/esm/fp'
  export default endOfISOYear
}

declare module 'date-fns/esm/fp/endOfMinute' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfYear' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/getDate' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getHours' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOYear' {
  import {getISOYear} from 'date-fns/esm/fp'
  export default getISOYear
}

declare module 'date-fns/esm/fp/getMilliseconds' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getYear' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfter' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMonday' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOYear' {
  import {isSameISOYear} from 'date-fns/esm/fp'
  export default isSameISOYear
}

declare module 'date-fns/esm/fp/isSameMinute' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameYear' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOYear' {
  import {lastDayOfISOYear} from 'date-fns/esm/fp'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfWeek' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfYear' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/max' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/min' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parse' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/setDate' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setHours' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOYear' {
  import {setISOYear} from 'date-fns/esm/fp'
  export default setISOYear
}

declare module 'date-fns/esm/fp/setMilliseconds' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setYear' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfHour' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOYear' {
  import {startOfISOYear} from 'date-fns/esm/fp'
  export default startOfISOYear
}

declare module 'date-fns/esm/fp/startOfMinute' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfYear' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDays' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOYears' {
  import {subISOYears} from 'date-fns/esm/fp'
  export default subISOYears
}

declare module 'date-fns/esm/fp/subMilliseconds' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addDays/index' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours/index' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOYears/index' {
  import {addISOYears} from 'date-fns/esm/fp'
  export default addISOYears
}

declare module 'date-fns/esm/fp/addMilliseconds/index' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes/index' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths/index' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters/index' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds/index' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks/index' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears/index' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexTo/index' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo/index' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc/index' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc/index' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOYears/index' {
  import {differenceInCalendarISOYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays/index' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours/index' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOYears/index' {
  import {differenceInISOYears} from 'date-fns/esm/fp'
  export default differenceInISOYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes/index' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonths/index' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSeconds/index' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeks/index' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYears/index' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/distanceInWords/index' {
  import {distanceInWords} from 'date-fns/esm/fp'
  export default distanceInWords
}

declare module 'date-fns/esm/fp/distanceInWordsStrict/index' {
  import {distanceInWordsStrict} from 'date-fns/esm/fp'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/endOfDay/index' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfHour/index' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek/index' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOYear/index' {
  import {endOfISOYear} from 'date-fns/esm/fp'
  export default endOfISOYear
}

declare module 'date-fns/esm/fp/endOfMinute/index' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth/index' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter/index' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond/index' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek/index' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfYear/index' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format/index' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/getDate/index' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay/index' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth/index' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear/index' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getHours/index' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay/index' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek/index' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOYear/index' {
  import {getISOYear} from 'date-fns/esm/fp'
  export default getISOYear
}

declare module 'date-fns/esm/fp/getMilliseconds/index' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes/index' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth/index' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter/index' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds/index' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime/index' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getYear/index' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfter/index' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore/index' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate/index' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual/index' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday/index' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear/index' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMonday/index' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay/index' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour/index' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek/index' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOYear/index' {
  import {isSameISOYear} from 'date-fns/esm/fp'
  export default isSameISOYear
}

declare module 'date-fns/esm/fp/isSameMinute/index' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth/index' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter/index' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond/index' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek/index' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameYear/index' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday/index' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday/index' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday/index' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid/index' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday/index' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend/index' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval/index' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOYear/index' {
  import {lastDayOfISOYear} from 'date-fns/esm/fp'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfYear/index' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/max/index' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/min/index' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parse/index' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/setDate/index' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay/index' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setHours/index' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay/index' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek/index' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOYear/index' {
  import {setISOYear} from 'date-fns/esm/fp'
  export default setISOYear
}

declare module 'date-fns/esm/fp/setMilliseconds/index' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes/index' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth/index' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter/index' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds/index' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setYear/index' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay/index' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfHour/index' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek/index' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOYear/index' {
  import {startOfISOYear} from 'date-fns/esm/fp'
  export default startOfISOYear
}

declare module 'date-fns/esm/fp/startOfMinute/index' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth/index' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter/index' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond/index' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek/index' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfYear/index' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDays/index' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours/index' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOYears/index' {
  import {subISOYears} from 'date-fns/esm/fp'
  export default subISOYears
}

declare module 'date-fns/esm/fp/subMilliseconds/index' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes/index' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths/index' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters/index' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds/index' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks/index' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears/index' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate/index' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addDays/index.js' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHours/index.js' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOYears/index.js' {
  import {addISOYears} from 'date-fns/esm/fp'
  export default addISOYears
}

declare module 'date-fns/esm/fp/addMilliseconds/index.js' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutes/index.js' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonths/index.js' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuarters/index.js' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSeconds/index.js' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeks/index.js' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYears/index.js' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlapping/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexTo/index.js' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestTo/index.js' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAsc/index.js' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDesc/index.js' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInCalendarDays/index.js' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeks/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOYears/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonths/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuarters/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeks/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarYears/index.js' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDays/index.js' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHours/index.js' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOYears/index.js' {
  import {differenceInISOYears} from 'date-fns/esm/fp'
  export default differenceInISOYears
}

declare module 'date-fns/esm/fp/differenceInMilliseconds/index.js' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutes/index.js' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonths/index.js' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuarters/index.js' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSeconds/index.js' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeks/index.js' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYears/index.js' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/distanceInWords/index.js' {
  import {distanceInWords} from 'date-fns/esm/fp'
  export default distanceInWords
}

declare module 'date-fns/esm/fp/distanceInWordsStrict/index.js' {
  import {distanceInWordsStrict} from 'date-fns/esm/fp'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/fp/eachDayOfInterval/index.js' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/endOfDay/index.js' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfHour/index.js' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeek/index.js' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOYear/index.js' {
  import {endOfISOYear} from 'date-fns/esm/fp'
  export default endOfISOYear
}

declare module 'date-fns/esm/fp/endOfMinute/index.js' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonth/index.js' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarter/index.js' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecond/index.js' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeek/index.js' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfYear/index.js' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/format/index.js' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/getDate/index.js' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDay/index.js' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYear/index.js' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonth/index.js' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYear/index.js' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getHours/index.js' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODay/index.js' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeek/index.js' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYear/index.js' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOYear/index.js' {
  import {getISOYear} from 'date-fns/esm/fp'
  export default getISOYear
}

declare module 'date-fns/esm/fp/getMilliseconds/index.js' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutes/index.js' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonth/index.js' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervals/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarter/index.js' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSeconds/index.js' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTime/index.js' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getYear/index.js' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfter/index.js' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBefore/index.js' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDate/index.js' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqual/index.js' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonth/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFriday/index.js' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonth/index.js' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYear/index.js' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMonday/index.js' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDay/index.js' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHour/index.js' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeek/index.js' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOYear/index.js' {
  import {isSameISOYear} from 'date-fns/esm/fp'
  export default isSameISOYear
}

declare module 'date-fns/esm/fp/isSameMinute/index.js' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonth/index.js' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarter/index.js' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecond/index.js' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeek/index.js' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameYear/index.js' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturday/index.js' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSunday/index.js' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursday/index.js' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesday/index.js' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValid/index.js' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesday/index.js' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekend/index.js' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinInterval/index.js' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfISOWeek/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOYear/index.js' {
  import {lastDayOfISOYear} from 'date-fns/esm/fp'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/fp/lastDayOfMonth/index.js' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarter/index.js' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfWeek/index.js' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfYear/index.js' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/max/index.js' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/min/index.js' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parse/index.js' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/setDate/index.js' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDay/index.js' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYear/index.js' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setHours/index.js' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODay/index.js' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeek/index.js' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOYear/index.js' {
  import {setISOYear} from 'date-fns/esm/fp'
  export default setISOYear
}

declare module 'date-fns/esm/fp/setMilliseconds/index.js' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutes/index.js' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonth/index.js' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarter/index.js' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSeconds/index.js' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setYear/index.js' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDay/index.js' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfHour/index.js' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeek/index.js' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOYear/index.js' {
  import {startOfISOYear} from 'date-fns/esm/fp'
  export default startOfISOYear
}

declare module 'date-fns/esm/fp/startOfMinute/index.js' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonth/index.js' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarter/index.js' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecond/index.js' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeek/index.js' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfYear/index.js' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDays/index.js' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHours/index.js' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOYears/index.js' {
  import {subISOYears} from 'date-fns/esm/fp'
  export default subISOYears
}

declare module 'date-fns/esm/fp/subMilliseconds/index.js' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutes/index.js' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonths/index.js' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuarters/index.js' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSeconds/index.js' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeks/index.js' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYears/index.js' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDate/index.js' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addDaysWithOptions' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHoursWithOptions' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOYearsWithOptions' {
  import {addISOYears} from 'date-fns/esm/fp'
  export default addISOYears
}

declare module 'date-fns/esm/fp/addMillisecondsWithOptions' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutesWithOptions' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonthsWithOptions' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuartersWithOptions' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSecondsWithOptions' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeksWithOptions' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYearsWithOptions' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexToWithOptions' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestToWithOptions' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAscWithOptions' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDescWithOptions' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInCalendarDaysWithOptions' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeksWithOptions' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOYearsWithOptions' {
  import {differenceInCalendarISOYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonthsWithOptions' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuartersWithOptions' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarYearsWithOptions' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDaysWithOptions' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOYearsWithOptions' {
  import {differenceInISOYears} from 'date-fns/esm/fp'
  export default differenceInISOYears
}

declare module 'date-fns/esm/fp/differenceInMillisecondsWithOptions' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonthsWithOptions' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYearsWithOptions' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/distanceInWordsWithOptions' {
  import {distanceInWords} from 'date-fns/esm/fp'
  export default distanceInWords
}

declare module 'date-fns/esm/fp/distanceInWordsStrictWithOptions' {
  import {distanceInWordsStrict} from 'date-fns/esm/fp'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/endOfDayWithOptions' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfHourWithOptions' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeekWithOptions' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOYearWithOptions' {
  import {endOfISOYear} from 'date-fns/esm/fp'
  export default endOfISOYear
}

declare module 'date-fns/esm/fp/endOfMinuteWithOptions' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonthWithOptions' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarterWithOptions' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecondWithOptions' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfYearWithOptions' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/formatWithOptions' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/getDateWithOptions' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDayWithOptions' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYearWithOptions' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonthWithOptions' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYearWithOptions' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getHoursWithOptions' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODayWithOptions' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeekWithOptions' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYearWithOptions' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOYearWithOptions' {
  import {getISOYear} from 'date-fns/esm/fp'
  export default getISOYear
}

declare module 'date-fns/esm/fp/getMillisecondsWithOptions' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutesWithOptions' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonthWithOptions' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervalsWithOptions' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarterWithOptions' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSecondsWithOptions' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTimeWithOptions' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getYearWithOptions' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfterWithOptions' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBeforeWithOptions' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDateWithOptions' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqualWithOptions' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonthWithOptions' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFridayWithOptions' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonthWithOptions' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYearWithOptions' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMondayWithOptions' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDayWithOptions' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHourWithOptions' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeekWithOptions' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOYearWithOptions' {
  import {isSameISOYear} from 'date-fns/esm/fp'
  export default isSameISOYear
}

declare module 'date-fns/esm/fp/isSameMinuteWithOptions' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonthWithOptions' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarterWithOptions' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecondWithOptions' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameYearWithOptions' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturdayWithOptions' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSundayWithOptions' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursdayWithOptions' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesdayWithOptions' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValidWithOptions' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesdayWithOptions' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekendWithOptions' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinIntervalWithOptions' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekWithOptions' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOYearWithOptions' {
  import {lastDayOfISOYear} from 'date-fns/esm/fp'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/fp/lastDayOfMonthWithOptions' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfYearWithOptions' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/maxWithOptions' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/minWithOptions' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parseWithOptions' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/setDateWithOptions' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDayWithOptions' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYearWithOptions' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setHoursWithOptions' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODayWithOptions' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeekWithOptions' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOYearWithOptions' {
  import {setISOYear} from 'date-fns/esm/fp'
  export default setISOYear
}

declare module 'date-fns/esm/fp/setMillisecondsWithOptions' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutesWithOptions' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonthWithOptions' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarterWithOptions' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSecondsWithOptions' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setYearWithOptions' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDayWithOptions' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfHourWithOptions' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeekWithOptions' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOYearWithOptions' {
  import {startOfISOYear} from 'date-fns/esm/fp'
  export default startOfISOYear
}

declare module 'date-fns/esm/fp/startOfMinuteWithOptions' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonthWithOptions' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarterWithOptions' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecondWithOptions' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfYearWithOptions' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDaysWithOptions' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHoursWithOptions' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOYearsWithOptions' {
  import {subISOYears} from 'date-fns/esm/fp'
  export default subISOYears
}

declare module 'date-fns/esm/fp/subMillisecondsWithOptions' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutesWithOptions' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonthsWithOptions' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuartersWithOptions' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSecondsWithOptions' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeksWithOptions' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYearsWithOptions' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDateWithOptions' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addDaysWithOptions/index' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHoursWithOptions/index' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOYearsWithOptions/index' {
  import {addISOYears} from 'date-fns/esm/fp'
  export default addISOYears
}

declare module 'date-fns/esm/fp/addMillisecondsWithOptions/index' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutesWithOptions/index' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonthsWithOptions/index' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuartersWithOptions/index' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSecondsWithOptions/index' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeksWithOptions/index' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYearsWithOptions/index' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexToWithOptions/index' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestToWithOptions/index' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAscWithOptions/index' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDescWithOptions/index' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInCalendarDaysWithOptions/index' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeksWithOptions/index' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOYearsWithOptions/index' {
  import {differenceInCalendarISOYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonthsWithOptions/index' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuartersWithOptions/index' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarYearsWithOptions/index' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDaysWithOptions/index' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOYearsWithOptions/index' {
  import {differenceInISOYears} from 'date-fns/esm/fp'
  export default differenceInISOYears
}

declare module 'date-fns/esm/fp/differenceInMillisecondsWithOptions/index' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonthsWithOptions/index' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYearsWithOptions/index' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/distanceInWordsWithOptions/index' {
  import {distanceInWords} from 'date-fns/esm/fp'
  export default distanceInWords
}

declare module 'date-fns/esm/fp/distanceInWordsStrictWithOptions/index' {
  import {distanceInWordsStrict} from 'date-fns/esm/fp'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/endOfDayWithOptions/index' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfHourWithOptions/index' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeekWithOptions/index' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOYearWithOptions/index' {
  import {endOfISOYear} from 'date-fns/esm/fp'
  export default endOfISOYear
}

declare module 'date-fns/esm/fp/endOfMinuteWithOptions/index' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonthWithOptions/index' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarterWithOptions/index' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecondWithOptions/index' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfYearWithOptions/index' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/formatWithOptions/index' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/getDateWithOptions/index' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDayWithOptions/index' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYearWithOptions/index' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonthWithOptions/index' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYearWithOptions/index' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getHoursWithOptions/index' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODayWithOptions/index' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeekWithOptions/index' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYearWithOptions/index' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOYearWithOptions/index' {
  import {getISOYear} from 'date-fns/esm/fp'
  export default getISOYear
}

declare module 'date-fns/esm/fp/getMillisecondsWithOptions/index' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutesWithOptions/index' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonthWithOptions/index' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervalsWithOptions/index' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarterWithOptions/index' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSecondsWithOptions/index' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTimeWithOptions/index' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getYearWithOptions/index' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfterWithOptions/index' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBeforeWithOptions/index' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDateWithOptions/index' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqualWithOptions/index' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonthWithOptions/index' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFridayWithOptions/index' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonthWithOptions/index' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYearWithOptions/index' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMondayWithOptions/index' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDayWithOptions/index' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHourWithOptions/index' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeekWithOptions/index' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOYearWithOptions/index' {
  import {isSameISOYear} from 'date-fns/esm/fp'
  export default isSameISOYear
}

declare module 'date-fns/esm/fp/isSameMinuteWithOptions/index' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonthWithOptions/index' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarterWithOptions/index' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecondWithOptions/index' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameYearWithOptions/index' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturdayWithOptions/index' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSundayWithOptions/index' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursdayWithOptions/index' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesdayWithOptions/index' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValidWithOptions/index' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesdayWithOptions/index' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekendWithOptions/index' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinIntervalWithOptions/index' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekWithOptions/index' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOYearWithOptions/index' {
  import {lastDayOfISOYear} from 'date-fns/esm/fp'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/fp/lastDayOfMonthWithOptions/index' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfYearWithOptions/index' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/maxWithOptions/index' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/minWithOptions/index' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parseWithOptions/index' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/setDateWithOptions/index' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDayWithOptions/index' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYearWithOptions/index' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setHoursWithOptions/index' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODayWithOptions/index' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeekWithOptions/index' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOYearWithOptions/index' {
  import {setISOYear} from 'date-fns/esm/fp'
  export default setISOYear
}

declare module 'date-fns/esm/fp/setMillisecondsWithOptions/index' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutesWithOptions/index' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonthWithOptions/index' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarterWithOptions/index' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSecondsWithOptions/index' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setYearWithOptions/index' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDayWithOptions/index' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfHourWithOptions/index' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeekWithOptions/index' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOYearWithOptions/index' {
  import {startOfISOYear} from 'date-fns/esm/fp'
  export default startOfISOYear
}

declare module 'date-fns/esm/fp/startOfMinuteWithOptions/index' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonthWithOptions/index' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarterWithOptions/index' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecondWithOptions/index' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfYearWithOptions/index' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDaysWithOptions/index' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHoursWithOptions/index' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOYearsWithOptions/index' {
  import {subISOYears} from 'date-fns/esm/fp'
  export default subISOYears
}

declare module 'date-fns/esm/fp/subMillisecondsWithOptions/index' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutesWithOptions/index' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonthsWithOptions/index' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuartersWithOptions/index' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSecondsWithOptions/index' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeksWithOptions/index' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYearsWithOptions/index' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDateWithOptions/index' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

declare module 'date-fns/esm/fp/addDaysWithOptions/index.js' {
  import {addDays} from 'date-fns/esm/fp'
  export default addDays
}

declare module 'date-fns/esm/fp/addHoursWithOptions/index.js' {
  import {addHours} from 'date-fns/esm/fp'
  export default addHours
}

declare module 'date-fns/esm/fp/addISOYearsWithOptions/index.js' {
  import {addISOYears} from 'date-fns/esm/fp'
  export default addISOYears
}

declare module 'date-fns/esm/fp/addMillisecondsWithOptions/index.js' {
  import {addMilliseconds} from 'date-fns/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns/esm/fp/addMinutesWithOptions/index.js' {
  import {addMinutes} from 'date-fns/esm/fp'
  export default addMinutes
}

declare module 'date-fns/esm/fp/addMonthsWithOptions/index.js' {
  import {addMonths} from 'date-fns/esm/fp'
  export default addMonths
}

declare module 'date-fns/esm/fp/addQuartersWithOptions/index.js' {
  import {addQuarters} from 'date-fns/esm/fp'
  export default addQuarters
}

declare module 'date-fns/esm/fp/addSecondsWithOptions/index.js' {
  import {addSeconds} from 'date-fns/esm/fp'
  export default addSeconds
}

declare module 'date-fns/esm/fp/addWeeksWithOptions/index.js' {
  import {addWeeks} from 'date-fns/esm/fp'
  export default addWeeks
}

declare module 'date-fns/esm/fp/addYearsWithOptions/index.js' {
  import {addYears} from 'date-fns/esm/fp'
  export default addYears
}

declare module 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js' {
  import {areIntervalsOverlapping} from 'date-fns/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns/esm/fp/closestIndexToWithOptions/index.js' {
  import {closestIndexTo} from 'date-fns/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns/esm/fp/closestToWithOptions/index.js' {
  import {closestTo} from 'date-fns/esm/fp'
  export default closestTo
}

declare module 'date-fns/esm/fp/compareAscWithOptions/index.js' {
  import {compareAsc} from 'date-fns/esm/fp'
  export default compareAsc
}

declare module 'date-fns/esm/fp/compareDescWithOptions/index.js' {
  import {compareDesc} from 'date-fns/esm/fp'
  export default compareDesc
}

declare module 'date-fns/esm/fp/differenceInCalendarDaysWithOptions/index.js' {
  import {differenceInCalendarDays} from 'date-fns/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns/esm/fp/differenceInCalendarISOWeeksWithOptions/index.js' {
  import {differenceInCalendarISOWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarISOYearsWithOptions/index.js' {
  import {differenceInCalendarISOYears} from 'date-fns/esm/fp'
  export default differenceInCalendarISOYears
}

declare module 'date-fns/esm/fp/differenceInCalendarMonthsWithOptions/index.js' {
  import {differenceInCalendarMonths} from 'date-fns/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns/esm/fp/differenceInCalendarQuartersWithOptions/index.js' {
  import {differenceInCalendarQuarters} from 'date-fns/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns/esm/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import {differenceInCalendarWeeks} from 'date-fns/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns/esm/fp/differenceInCalendarYearsWithOptions/index.js' {
  import {differenceInCalendarYears} from 'date-fns/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns/esm/fp/differenceInDaysWithOptions/index.js' {
  import {differenceInDays} from 'date-fns/esm/fp'
  export default differenceInDays
}

declare module 'date-fns/esm/fp/differenceInHoursWithOptions/index.js' {
  import {differenceInHours} from 'date-fns/esm/fp'
  export default differenceInHours
}

declare module 'date-fns/esm/fp/differenceInISOYearsWithOptions/index.js' {
  import {differenceInISOYears} from 'date-fns/esm/fp'
  export default differenceInISOYears
}

declare module 'date-fns/esm/fp/differenceInMillisecondsWithOptions/index.js' {
  import {differenceInMilliseconds} from 'date-fns/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns/esm/fp/differenceInMinutesWithOptions/index.js' {
  import {differenceInMinutes} from 'date-fns/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns/esm/fp/differenceInMonthsWithOptions/index.js' {
  import {differenceInMonths} from 'date-fns/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns/esm/fp/differenceInQuartersWithOptions/index.js' {
  import {differenceInQuarters} from 'date-fns/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns/esm/fp/differenceInSecondsWithOptions/index.js' {
  import {differenceInSeconds} from 'date-fns/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns/esm/fp/differenceInWeeksWithOptions/index.js' {
  import {differenceInWeeks} from 'date-fns/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns/esm/fp/differenceInYearsWithOptions/index.js' {
  import {differenceInYears} from 'date-fns/esm/fp'
  export default differenceInYears
}

declare module 'date-fns/esm/fp/distanceInWordsWithOptions/index.js' {
  import {distanceInWords} from 'date-fns/esm/fp'
  export default distanceInWords
}

declare module 'date-fns/esm/fp/distanceInWordsStrictWithOptions/index.js' {
  import {distanceInWordsStrict} from 'date-fns/esm/fp'
  export default distanceInWordsStrict
}

declare module 'date-fns/esm/fp/eachDayOfIntervalWithOptions/index.js' {
  import {eachDayOfInterval} from 'date-fns/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns/esm/fp/endOfDayWithOptions/index.js' {
  import {endOfDay} from 'date-fns/esm/fp'
  export default endOfDay
}

declare module 'date-fns/esm/fp/endOfHourWithOptions/index.js' {
  import {endOfHour} from 'date-fns/esm/fp'
  export default endOfHour
}

declare module 'date-fns/esm/fp/endOfISOWeekWithOptions/index.js' {
  import {endOfISOWeek} from 'date-fns/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns/esm/fp/endOfISOYearWithOptions/index.js' {
  import {endOfISOYear} from 'date-fns/esm/fp'
  export default endOfISOYear
}

declare module 'date-fns/esm/fp/endOfMinuteWithOptions/index.js' {
  import {endOfMinute} from 'date-fns/esm/fp'
  export default endOfMinute
}

declare module 'date-fns/esm/fp/endOfMonthWithOptions/index.js' {
  import {endOfMonth} from 'date-fns/esm/fp'
  export default endOfMonth
}

declare module 'date-fns/esm/fp/endOfQuarterWithOptions/index.js' {
  import {endOfQuarter} from 'date-fns/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns/esm/fp/endOfSecondWithOptions/index.js' {
  import {endOfSecond} from 'date-fns/esm/fp'
  export default endOfSecond
}

declare module 'date-fns/esm/fp/endOfWeekWithOptions/index.js' {
  import {endOfWeek} from 'date-fns/esm/fp'
  export default endOfWeek
}

declare module 'date-fns/esm/fp/endOfYearWithOptions/index.js' {
  import {endOfYear} from 'date-fns/esm/fp'
  export default endOfYear
}

declare module 'date-fns/esm/fp/formatWithOptions/index.js' {
  import {format} from 'date-fns/esm/fp'
  export default format
}

declare module 'date-fns/esm/fp/getDateWithOptions/index.js' {
  import {getDate} from 'date-fns/esm/fp'
  export default getDate
}

declare module 'date-fns/esm/fp/getDayWithOptions/index.js' {
  import {getDay} from 'date-fns/esm/fp'
  export default getDay
}

declare module 'date-fns/esm/fp/getDayOfYearWithOptions/index.js' {
  import {getDayOfYear} from 'date-fns/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns/esm/fp/getDaysInMonthWithOptions/index.js' {
  import {getDaysInMonth} from 'date-fns/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns/esm/fp/getDaysInYearWithOptions/index.js' {
  import {getDaysInYear} from 'date-fns/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns/esm/fp/getHoursWithOptions/index.js' {
  import {getHours} from 'date-fns/esm/fp'
  export default getHours
}

declare module 'date-fns/esm/fp/getISODayWithOptions/index.js' {
  import {getISODay} from 'date-fns/esm/fp'
  export default getISODay
}

declare module 'date-fns/esm/fp/getISOWeekWithOptions/index.js' {
  import {getISOWeek} from 'date-fns/esm/fp'
  export default getISOWeek
}

declare module 'date-fns/esm/fp/getISOWeeksInYearWithOptions/index.js' {
  import {getISOWeeksInYear} from 'date-fns/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns/esm/fp/getISOYearWithOptions/index.js' {
  import {getISOYear} from 'date-fns/esm/fp'
  export default getISOYear
}

declare module 'date-fns/esm/fp/getMillisecondsWithOptions/index.js' {
  import {getMilliseconds} from 'date-fns/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns/esm/fp/getMinutesWithOptions/index.js' {
  import {getMinutes} from 'date-fns/esm/fp'
  export default getMinutes
}

declare module 'date-fns/esm/fp/getMonthWithOptions/index.js' {
  import {getMonth} from 'date-fns/esm/fp'
  export default getMonth
}

declare module 'date-fns/esm/fp/getOverlappingDaysInIntervalsWithOptions/index.js' {
  import {getOverlappingDaysInIntervals} from 'date-fns/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns/esm/fp/getQuarterWithOptions/index.js' {
  import {getQuarter} from 'date-fns/esm/fp'
  export default getQuarter
}

declare module 'date-fns/esm/fp/getSecondsWithOptions/index.js' {
  import {getSeconds} from 'date-fns/esm/fp'
  export default getSeconds
}

declare module 'date-fns/esm/fp/getTimeWithOptions/index.js' {
  import {getTime} from 'date-fns/esm/fp'
  export default getTime
}

declare module 'date-fns/esm/fp/getYearWithOptions/index.js' {
  import {getYear} from 'date-fns/esm/fp'
  export default getYear
}

declare module 'date-fns/esm/fp/isAfterWithOptions/index.js' {
  import {isAfter} from 'date-fns/esm/fp'
  export default isAfter
}

declare module 'date-fns/esm/fp/isBeforeWithOptions/index.js' {
  import {isBefore} from 'date-fns/esm/fp'
  export default isBefore
}

declare module 'date-fns/esm/fp/isDateWithOptions/index.js' {
  import {isDate} from 'date-fns/esm/fp'
  export default isDate
}

declare module 'date-fns/esm/fp/isEqualWithOptions/index.js' {
  import {isEqual} from 'date-fns/esm/fp'
  export default isEqual
}

declare module 'date-fns/esm/fp/isFirstDayOfMonthWithOptions/index.js' {
  import {isFirstDayOfMonth} from 'date-fns/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns/esm/fp/isFridayWithOptions/index.js' {
  import {isFriday} from 'date-fns/esm/fp'
  export default isFriday
}

declare module 'date-fns/esm/fp/isLastDayOfMonthWithOptions/index.js' {
  import {isLastDayOfMonth} from 'date-fns/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns/esm/fp/isLeapYearWithOptions/index.js' {
  import {isLeapYear} from 'date-fns/esm/fp'
  export default isLeapYear
}

declare module 'date-fns/esm/fp/isMondayWithOptions/index.js' {
  import {isMonday} from 'date-fns/esm/fp'
  export default isMonday
}

declare module 'date-fns/esm/fp/isSameDayWithOptions/index.js' {
  import {isSameDay} from 'date-fns/esm/fp'
  export default isSameDay
}

declare module 'date-fns/esm/fp/isSameHourWithOptions/index.js' {
  import {isSameHour} from 'date-fns/esm/fp'
  export default isSameHour
}

declare module 'date-fns/esm/fp/isSameISOWeekWithOptions/index.js' {
  import {isSameISOWeek} from 'date-fns/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns/esm/fp/isSameISOYearWithOptions/index.js' {
  import {isSameISOYear} from 'date-fns/esm/fp'
  export default isSameISOYear
}

declare module 'date-fns/esm/fp/isSameMinuteWithOptions/index.js' {
  import {isSameMinute} from 'date-fns/esm/fp'
  export default isSameMinute
}

declare module 'date-fns/esm/fp/isSameMonthWithOptions/index.js' {
  import {isSameMonth} from 'date-fns/esm/fp'
  export default isSameMonth
}

declare module 'date-fns/esm/fp/isSameQuarterWithOptions/index.js' {
  import {isSameQuarter} from 'date-fns/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns/esm/fp/isSameSecondWithOptions/index.js' {
  import {isSameSecond} from 'date-fns/esm/fp'
  export default isSameSecond
}

declare module 'date-fns/esm/fp/isSameWeekWithOptions/index.js' {
  import {isSameWeek} from 'date-fns/esm/fp'
  export default isSameWeek
}

declare module 'date-fns/esm/fp/isSameYearWithOptions/index.js' {
  import {isSameYear} from 'date-fns/esm/fp'
  export default isSameYear
}

declare module 'date-fns/esm/fp/isSaturdayWithOptions/index.js' {
  import {isSaturday} from 'date-fns/esm/fp'
  export default isSaturday
}

declare module 'date-fns/esm/fp/isSundayWithOptions/index.js' {
  import {isSunday} from 'date-fns/esm/fp'
  export default isSunday
}

declare module 'date-fns/esm/fp/isThursdayWithOptions/index.js' {
  import {isThursday} from 'date-fns/esm/fp'
  export default isThursday
}

declare module 'date-fns/esm/fp/isTuesdayWithOptions/index.js' {
  import {isTuesday} from 'date-fns/esm/fp'
  export default isTuesday
}

declare module 'date-fns/esm/fp/isValidWithOptions/index.js' {
  import {isValid} from 'date-fns/esm/fp'
  export default isValid
}

declare module 'date-fns/esm/fp/isWednesdayWithOptions/index.js' {
  import {isWednesday} from 'date-fns/esm/fp'
  export default isWednesday
}

declare module 'date-fns/esm/fp/isWeekendWithOptions/index.js' {
  import {isWeekend} from 'date-fns/esm/fp'
  export default isWeekend
}

declare module 'date-fns/esm/fp/isWithinIntervalWithOptions/index.js' {
  import {isWithinInterval} from 'date-fns/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns/esm/fp/lastDayOfISOWeekWithOptions/index.js' {
  import {lastDayOfISOWeek} from 'date-fns/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns/esm/fp/lastDayOfISOYearWithOptions/index.js' {
  import {lastDayOfISOYear} from 'date-fns/esm/fp'
  export default lastDayOfISOYear
}

declare module 'date-fns/esm/fp/lastDayOfMonthWithOptions/index.js' {
  import {lastDayOfMonth} from 'date-fns/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns/esm/fp/lastDayOfQuarterWithOptions/index.js' {
  import {lastDayOfQuarter} from 'date-fns/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns/esm/fp/lastDayOfWeekWithOptions/index.js' {
  import {lastDayOfWeek} from 'date-fns/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns/esm/fp/lastDayOfYearWithOptions/index.js' {
  import {lastDayOfYear} from 'date-fns/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns/esm/fp/maxWithOptions/index.js' {
  import {max} from 'date-fns/esm/fp'
  export default max
}

declare module 'date-fns/esm/fp/minWithOptions/index.js' {
  import {min} from 'date-fns/esm/fp'
  export default min
}

declare module 'date-fns/esm/fp/parseWithOptions/index.js' {
  import {parse} from 'date-fns/esm/fp'
  export default parse
}

declare module 'date-fns/esm/fp/setDateWithOptions/index.js' {
  import {setDate} from 'date-fns/esm/fp'
  export default setDate
}

declare module 'date-fns/esm/fp/setDayWithOptions/index.js' {
  import {setDay} from 'date-fns/esm/fp'
  export default setDay
}

declare module 'date-fns/esm/fp/setDayOfYearWithOptions/index.js' {
  import {setDayOfYear} from 'date-fns/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns/esm/fp/setHoursWithOptions/index.js' {
  import {setHours} from 'date-fns/esm/fp'
  export default setHours
}

declare module 'date-fns/esm/fp/setISODayWithOptions/index.js' {
  import {setISODay} from 'date-fns/esm/fp'
  export default setISODay
}

declare module 'date-fns/esm/fp/setISOWeekWithOptions/index.js' {
  import {setISOWeek} from 'date-fns/esm/fp'
  export default setISOWeek
}

declare module 'date-fns/esm/fp/setISOYearWithOptions/index.js' {
  import {setISOYear} from 'date-fns/esm/fp'
  export default setISOYear
}

declare module 'date-fns/esm/fp/setMillisecondsWithOptions/index.js' {
  import {setMilliseconds} from 'date-fns/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns/esm/fp/setMinutesWithOptions/index.js' {
  import {setMinutes} from 'date-fns/esm/fp'
  export default setMinutes
}

declare module 'date-fns/esm/fp/setMonthWithOptions/index.js' {
  import {setMonth} from 'date-fns/esm/fp'
  export default setMonth
}

declare module 'date-fns/esm/fp/setQuarterWithOptions/index.js' {
  import {setQuarter} from 'date-fns/esm/fp'
  export default setQuarter
}

declare module 'date-fns/esm/fp/setSecondsWithOptions/index.js' {
  import {setSeconds} from 'date-fns/esm/fp'
  export default setSeconds
}

declare module 'date-fns/esm/fp/setYearWithOptions/index.js' {
  import {setYear} from 'date-fns/esm/fp'
  export default setYear
}

declare module 'date-fns/esm/fp/startOfDayWithOptions/index.js' {
  import {startOfDay} from 'date-fns/esm/fp'
  export default startOfDay
}

declare module 'date-fns/esm/fp/startOfHourWithOptions/index.js' {
  import {startOfHour} from 'date-fns/esm/fp'
  export default startOfHour
}

declare module 'date-fns/esm/fp/startOfISOWeekWithOptions/index.js' {
  import {startOfISOWeek} from 'date-fns/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns/esm/fp/startOfISOYearWithOptions/index.js' {
  import {startOfISOYear} from 'date-fns/esm/fp'
  export default startOfISOYear
}

declare module 'date-fns/esm/fp/startOfMinuteWithOptions/index.js' {
  import {startOfMinute} from 'date-fns/esm/fp'
  export default startOfMinute
}

declare module 'date-fns/esm/fp/startOfMonthWithOptions/index.js' {
  import {startOfMonth} from 'date-fns/esm/fp'
  export default startOfMonth
}

declare module 'date-fns/esm/fp/startOfQuarterWithOptions/index.js' {
  import {startOfQuarter} from 'date-fns/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns/esm/fp/startOfSecondWithOptions/index.js' {
  import {startOfSecond} from 'date-fns/esm/fp'
  export default startOfSecond
}

declare module 'date-fns/esm/fp/startOfWeekWithOptions/index.js' {
  import {startOfWeek} from 'date-fns/esm/fp'
  export default startOfWeek
}

declare module 'date-fns/esm/fp/startOfYearWithOptions/index.js' {
  import {startOfYear} from 'date-fns/esm/fp'
  export default startOfYear
}

declare module 'date-fns/esm/fp/subDaysWithOptions/index.js' {
  import {subDays} from 'date-fns/esm/fp'
  export default subDays
}

declare module 'date-fns/esm/fp/subHoursWithOptions/index.js' {
  import {subHours} from 'date-fns/esm/fp'
  export default subHours
}

declare module 'date-fns/esm/fp/subISOYearsWithOptions/index.js' {
  import {subISOYears} from 'date-fns/esm/fp'
  export default subISOYears
}

declare module 'date-fns/esm/fp/subMillisecondsWithOptions/index.js' {
  import {subMilliseconds} from 'date-fns/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns/esm/fp/subMinutesWithOptions/index.js' {
  import {subMinutes} from 'date-fns/esm/fp'
  export default subMinutes
}

declare module 'date-fns/esm/fp/subMonthsWithOptions/index.js' {
  import {subMonths} from 'date-fns/esm/fp'
  export default subMonths
}

declare module 'date-fns/esm/fp/subQuartersWithOptions/index.js' {
  import {subQuarters} from 'date-fns/esm/fp'
  export default subQuarters
}

declare module 'date-fns/esm/fp/subSecondsWithOptions/index.js' {
  import {subSeconds} from 'date-fns/esm/fp'
  export default subSeconds
}

declare module 'date-fns/esm/fp/subWeeksWithOptions/index.js' {
  import {subWeeks} from 'date-fns/esm/fp'
  export default subWeeks
}

declare module 'date-fns/esm/fp/subYearsWithOptions/index.js' {
  import {subYears} from 'date-fns/esm/fp'
  export default subYears
}

declare module 'date-fns/esm/fp/toDateWithOptions/index.js' {
  import {toDate} from 'date-fns/esm/fp'
  export default toDate
}

// Locales

declare module 'date-fns/locale/ar' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ro' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhCn' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhTw' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ar/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ro/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhCn/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhTw/index' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ar/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/bg/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ca/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/cs/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/da/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/de/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/el/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/en/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/eo/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/es/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fi/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fil/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/fr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/hr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/id/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/is/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/it/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ja/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ko/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/mk/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nb/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/nl/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pl/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/pt/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ro/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/ru/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sk/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/sv/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/th/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/tr/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhCn/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/locale/zhTw/index.js' {
  const locale: Locale
  export = locale
}

declare module 'date-fns/esm/locale/ar' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/bg' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ca' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/cs' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/da' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/de' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/el' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/en' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/eo' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/es' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fi' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fil' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/hr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/id' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/is' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/it' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ja' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ko' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/mk' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nb' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nl' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pl' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pt' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ro' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ru' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sk' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sv' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/th' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/tr' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhCn' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhTw' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ar/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/bg/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ca/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/cs/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/da/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/de/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/el/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/en/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/eo/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/es/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fi/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fil/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/hr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/id/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/is/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/it/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ja/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ko/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/mk/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nb/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nl/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pl/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pt/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ro/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ru/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sk/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sv/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/th/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/tr/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhCn/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhTw/index' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ar/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/bg/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ca/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/cs/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/da/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/de/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/el/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/en/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/eo/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/es/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fi/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fil/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/fr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/hr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/id/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/is/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/it/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ja/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ko/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/mk/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nb/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/nl/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pl/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/pt/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ro/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/ru/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sk/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/sv/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/th/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/tr/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhCn/index.js' {
  const locale: Locale
  export default locale
}

declare module 'date-fns/esm/locale/zhTw/index.js' {
  const locale: Locale
  export default locale
}
