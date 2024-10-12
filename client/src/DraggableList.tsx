import React, { FC } from 'react';
import DraggableListItem from './DraggableListItem';
import {
    DragDropContext,
    Droppable,
    OnDragEndResponder,
} from 'react-beautiful-dnd';
import { List } from '@mui/material';
import { Game } from "@shared/game";

export type Props = {
    items: Game[];
    onDragEnd: OnDragEndResponder;
};

const DraggableList: FC<Props> = React.memo(({ items, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-list">
                {(provided) => (
                    <List ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item: Game, index: number) => (
                            <DraggableListItem item={item} index={index} key={item.id} />
                        ))}
                        {provided.placeholder}
                    </List>
                )}
            </Droppable>
        </DragDropContext>
    );
});

export default DraggableList;
