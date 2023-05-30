'use client'

import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
useEffect(() => {
getBoard()
}, [])

  return (
    <DragDropContext>
      <Droppable droppableId='board' direction='horizontal' type='column' >
        {(provided)=> (
          <div>
            {/* render all the columns in the board */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board