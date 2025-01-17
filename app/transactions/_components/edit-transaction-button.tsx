"use client";

import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import UpsertTrasactionDialog from "@/app/_components/upsert-transaction-dialog";
import { PencilIcon } from "lucide-react";
import { Transaction } from "@prisma/client";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialoIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <>
        <>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={() => setDialogIsOpen(true)}
          >
            <PencilIcon />
          </Button>
        </>
      </>
      <UpsertTrasactionDialog
        isOpen={dialoIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
