import React from 'react'

function BtnRemove(props) {
  const {handleRemoveTasks, selected} = props
  return (
    <label htmlFor="remove-btn">
      {
        selected
          ? <input
              type="button"
              value="Remover"
              data-testid="id-remove"
              onClick={(event) => handleRemoveTasks(event)}
            /> 
          : <input
              type="button"
              value="Remover"
              data-testid="id-remove"
              onClick={(event) => handleRemoveTasks(event)}
              disabled
            />
      }
      {/* <input
        type="button"
        value="Remover"
        data-testid="id-remove"
        onClick={(event) => handleRemoveTasks(event)}
        disabled
      /> */}
    </label>
  )
}

export default BtnRemove
