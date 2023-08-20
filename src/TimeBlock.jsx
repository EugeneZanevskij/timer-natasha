import React from 'react'

const TimeBlock = ({value, label}) => {
  return (
    <div className="block">
        <span className="value">{value}</span>
        <span className="label">{label}</span>
      </div>
  )
}

export default TimeBlock