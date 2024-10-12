import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Tooltip,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { Game } from "@shared/game";

export type Props = {
    item: Game;
    index: number;
};

const DraggableListItem: FC<Props> = ({ item, index }) => {
    return (
        <Draggable draggableId={item.id.toString()} index={index}>
            {(provided, snapshot) => (
                <Tooltip title="Drag Me!">
                    <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={snapshot.isDragging ? { background: 'rgb(235,235,235)' } : {}}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <InboxIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} />
                    </ListItem>
                </Tooltip>
            )}
        </Draggable>
    );
};

export default DraggableListItem;
