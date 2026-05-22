


"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";

export function UpdateProfileModal() {
  // 1. Current user-er session context theke data niye asha
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // FormData input-er 'name' attribute thakle automatic value pay
    const name = formData.get("name");
    const image = formData.get("image");

    try {
      await authClient.updateUser({
        image: image,
        name: name,
      });
      toast.success('Updated successfully!');
    } catch (error) {
      toast.error('Something went wrong!');
      console.error(error);
    }
  };

  if (isPending) return <p>Loading...</p>;

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
                  
                  {/* 2. user?.name thakle sheta default value hishebe baddhiye deya */}
                  <TextField defaultValue={user?.name || ""} className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Edit your name" />
                  </TextField>
                  
                  {/* 3. user?.image thakle sheta default value hishebe baddhiye deya */}
                  <TextField defaultValue={user?.image || ""} className="w-full" name="image" type="url">
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