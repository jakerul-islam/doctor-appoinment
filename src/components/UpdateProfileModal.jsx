"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";

export function UpdateProfileModal() {
  const onSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userUpdate = Object.fromEntries(formData.entries());
    console.log(userUpdate);

    await authClient.updateUser({
    image: userUpdate.image,
    name: userUpdate.name

})

toast.success('updeted successfully')

    
  }
  return (
    <Modal>
      <Button className={'w-full bg-teal-500 text-white rounded-none'} variant="secondary"> Update Profile </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Edit your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image</Label>
                    <Input placeholder="Give Url" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Save Changes</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
