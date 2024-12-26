import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo, changeStatusTodo, Todo } from "../store/todoSlice";
import { TextField, IconButton, ListItem, MenuItem, Select, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, SelectChangeEvent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState<string>(todo.title);
    const [status, setStatus] = useState<"Todo" | "Doing" | "Done">(todo.status);
    const [openDialog, setOpenDialog] = useState(false);

    const handleEdit = () => {
        if (isEditing && title.trim()) {
            dispatch(editTodo({ id: todo.id, title }));
        }
        setIsEditing(!isEditing);
    };

    const handleChangeStatus = (event: SelectChangeEvent<"Todo" | "Doing" | "Done">) => {
        const newStatus = event.target.value as "Todo" | "Doing" | "Done"; if (newStatus === "Done") {
            setOpenDialog(true);
        } else {
            setStatus(newStatus);
            dispatch(changeStatusTodo({ id: todo.id, status: newStatus }));
        }
    };

    const handleConfirmChangeStatus = () => {
        setStatus("Done");
        dispatch(changeStatusTodo({ id: todo.id, status: "Done" }));
        setOpenDialog(false);
    };

    const handleCancelChangeStatus = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <ListItem
                sx={{
                    borderColor: "gray",
                    borderWidth: 2,
                    borderStyle: "solid",
                    background: status === "Todo" ? "rgb(255, 210, 220)" : status === "Doing" ? "rgb(255, 230, 204)" : "rgb(200, 250, 200)",
                    marginBottom: 1,
                    borderRadius: 1,
                }}
            >
                {isEditing ? (
                    <TextField
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label="Edit Todo"
                         sx={{ background: 'white', width: '350px' }} 
                        inputProps={{
                            maxLength: 30,
                        }}
                        error={title.length >= 30}
                        helperText={title.length >= 30 ? "Max 30 caracters" : ""}

                    />
                ) : (
                    <Typography variant="h6" sx={{ width: '350px' }}>
                        {todo.title}
                    </Typography>
                )}

                <Select
                    value={status}
                    onChange={handleChangeStatus}
                    displayEmpty
                    style={{ marginRight: "10px", minWidth: "100px" }}
                    sx={{ background: 'white' }}
                >
                    <MenuItem value="Todo">Todo</MenuItem>
                    <MenuItem value="Doing">Doing</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </Select>

                <IconButton onClick={handleEdit} aria-label={isEditing ? "save" : "edit"}>
                    {isEditing ? <SaveIcon /> : <EditIcon />}
                </IconButton>
                <IconButton onClick={() => dispatch(deleteTodo(todo.id))}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
            <Dialog open={openDialog} onClose={handleCancelChangeStatus}>
                <DialogTitle>Confirm Status Change</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to change the status of this task to "Done"?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelChangeStatus} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmChangeStatus} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TodoItem;
