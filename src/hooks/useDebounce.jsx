import React, { useState } from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebouncedValue] = useState('');

    const timerId = setTimeout(() => {
        if (value) setDebouncedValue(value)
        else clearTimeout(timerId)
    }, delay)

    return debounceValue;
}

export default useDebounce