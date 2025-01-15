import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo, changeStatusTodo, Todo } from "../store/todoSlice";
import {
    TextField,
    IconButton,
    ListItem,
    MenuItem,
    Select,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [status, setStatus] = useState(todo.status);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const theme = useTheme();

    const handleEdit = () => {
        if (isEditing && title.trim()) {
            dispatch(editTodo({ id: todo.id, title }));
        }
        setIsEditing(!isEditing);
    };

    const handleStatusChange = (newStatus: "Todo" | "Doing" | "Done") => {
        if (newStatus === "Done") {
            setIsDialogOpen(true);
        } else {
            setStatus(newStatus);
            dispatch(changeStatusTodo({ id: todo.id, status: newStatus }));
        }
    };

    const confirmStatusChange = () => {
        setStatus("Done");
        dispatch(changeStatusTodo({ id: todo.id, status: "Done" }));
        setIsDialogOpen(false);
    };

    const getStatusColor = () => {
        return {
            Todo: theme.palette.error.main,
            Doing: theme.palette.secondary.main,
            Done: theme.palette.primary.main,
        }[status];
    };

    return (
        <>
            <ListItem
    sx={{
        mb: 0.5, 
        py: 0.5,
        px: 1,
        borderRadius: 3,
        backgroundColor: theme.palette.background.default,
        fontSize: "0.65rem",
    }}
>
    {isEditing ? (
        <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Edit Todo"
            size="small" 
            sx={{ width: 350 }}
            inputProps={{ maxLength: 30 }}
        />
    ) : (
        <Typography variant="body2" sx={{ width: 350 }}>
            {todo.title}
        </Typography>
    )}

                <Select
                    value={status}
                    onChange={(e) => handleStatusChange(e.target.value as "Todo" | "Doing" | "Done")}
                    sx={{
                        minWidth: 120,
                        backgroundColor: theme.palette.background.default,
                        borderRadius: 5,
                        color: getStatusColor(),
                        height:35
                    }}
                   
                    IconComponent={(props) => (
                        <ArrowDropDownIcon
                          {...props}
                          style={{ color: theme.palette.text.secondary }}
                        />
                      )}
                >
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>

                <IconButton onClick={handleEdit}>
                    {isEditing ? <SaveIcon sx={{color: theme.palette.text.secondary}} /> : <EditIcon sx={{color: theme.palette.text.secondary}} />}
                </IconButton>
                <IconButton onClick={() => dispatch(deleteTodo(todo.id))}>
                    <DeleteIcon sx={{color: theme.palette.text.secondary}} />
                </IconButton>
            </ListItem>

            <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
                <DialogTitle>Confirm Status Change</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to change the status of this task to "Done"?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmStatusChange} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TodoItem;
