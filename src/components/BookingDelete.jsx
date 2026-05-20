"use client";

import {AlertDialog, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";

export function BookingDelete() {
  return (
    <AlertDialog>
       <Button
          size="sm"
          className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium px-4 py-2 rounded-xl flex items-center gap-1.5 h-9 min-w-0 transition-colors shadow-sm border-0"
        >
          <Trash2 size={14} />
          Delete
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}