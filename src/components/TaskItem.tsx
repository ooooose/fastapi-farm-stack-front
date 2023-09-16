import React, { memo } from "react";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { Task } from "../types/types";
import { useAppDispatch } from "../app/hooks";
import { setEditedTask } from "../slices/appSlice";
import { useMutateTask } from "../hooks/useMutateTask";

const TaskItemMemo = ({ id, title, description}: Task) => {
  const dispatch = useAppDispatch()
  const { deleteTaskMutation } = useMutateTask()
  return (
    <li>
      <span className="font-bold cursor-pointer">{title}</span>
      <div className="flex float-right ml-20">
        <PencilAltIcon 
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedTask({
                id: id,
                title: title,
                description: description,
              })
            )
          }}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteTaskMutation.mutate(id)
          }}
        />

      </div>
    </li>
  )
}

export const TaskItem = memo(TaskItemMemo)