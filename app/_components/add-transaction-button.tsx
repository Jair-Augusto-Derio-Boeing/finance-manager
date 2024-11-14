"use client";

import { useState } from "react";
import UpsertTrasactionDialog from "./upsert-transaction-dialog";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [dialoIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <>
        <>
          <Button
            className="rounded-full font-bold"
            onClick={() => setDialogIsOpen(true)}
          >
            Adicionar Transações
            <ArrowDownUpIcon />
          </Button>
        </>
      </>
      <UpsertTrasactionDialog
        isOpen={dialoIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
