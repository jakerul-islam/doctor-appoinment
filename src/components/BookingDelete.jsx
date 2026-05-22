"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function BookingDelete({bookingId}) {
    const router = useRouter();

    const deleteBookingHandle = async()=>{
        const {data:tokenData}=await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${bookingId}`,{
            method: 'DELETE',
            headers:{
                "content-type":"application/json",
                authorization: `Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json()
        console.log(data)

        if(data){
            toast.success('delete successfully')
            router.refresh()
        }
    }
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
            
            </AlertDialog.Body>
            <AlertDialog.Footer>
              {/* <Button slot="close" variant="tertiary">
                Cancel
              </Button> */}
              <Button onClick={deleteBookingHandle} slot="close" variant="danger">
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
