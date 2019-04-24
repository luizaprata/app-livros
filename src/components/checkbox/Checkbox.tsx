import React from 'react'
import './Checkbox.css'

const Checkbox = ({ text, checked }: { text?: string; checked: boolean }) => (
  <div className="checkbox-root">
    <div className="checkbox" style={{ backgroundColor: 'white' }}>
      {checked && <Check />}
    </div>
    <div className="label label-right">{text}</div>
  </div>
)

const Check = () => (
  <svg className="check" width="22" height="22" viewBox="0 0 24 24">
    <path
      fill="#A9A9A9"
      d="M0 11.386l1.17-1.206c1.951.522 5.313 1.731 8.33 3.597 3.175-4.177 9.582-9.398 13.456-11.777l1.044 1.073-14 18.927-10-10.614z"
    />
  </svg>
)

export default Checkbox
