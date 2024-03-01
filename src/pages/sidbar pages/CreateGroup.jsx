import React, { useState } from "react";
import groupService from "../../appwrite/groups";
import { ContentHeader, Input, TextArea, Button } from "./../../Components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [groupDesctiption, setGroupDescription] = useState("");
  const notify = () => toast("Group is created")

  const CreateGroup = async () => {
    let { id } = JSON.parse(localStorage.getItem("userInfo"));
    let res = await groupService.createGroup({
      group_name: groupName,
      user_id: id,
      description: groupDesctiption,
    });

    if(res){
      notify()
    }

    
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      {/* toast message */}
      <ToastContainer />


      {/* content header */}
      <ContentHeader
        title="Create a New Group"
        subtitle=" Fill out the form below to create a new group."
      />

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* create group section */}
          <div className="space-y-6" action="#" method="POST">
            {/* group name input */}
            <Input
              label="Group Name"
              name="groupName"
              placeholder="group name"
              onChange={(e) => setGroupName(e.target.value)}
              value={groupName}
            />

            {/* group description Input */}
            <TextArea
              label="Description"
              name="Description"
              onChange={(e) => setGroupDescription(e.target.value)}
              value={groupDesctiption}
            />

            <div>
              <Button
                onClick={CreateGroup}
                clasName="w-[100%] p-3 bg-[var(--text-color1)] text-white hover:text-black"
              >
                Create Group
              </Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateGroup;
