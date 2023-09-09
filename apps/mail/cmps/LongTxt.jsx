const { useState } = React

export function LongTxt({ txt, length = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      {(length <= 30 && txt) || (
        <div>
          {isExpanded ? txt : txt.substring(0, 30) + ' ..'}
          <span
            style={{ cursor: 'pointer', color: 'blue' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? ' Read less' : '.'}
          </span>
        </div>
      )}
    </div>
  )
}
