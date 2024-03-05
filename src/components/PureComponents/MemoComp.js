import React from 'react'

 function MemoComp({name}) {
    console.log('Rendering in Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}
export default React.memo(MemoComp)