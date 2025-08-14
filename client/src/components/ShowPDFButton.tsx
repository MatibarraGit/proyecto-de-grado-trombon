"use client";

import { FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

type ShowPDFButtonType = {
  title: string,
  filePath: string, 
  hoverColorClassName: string,
  buttonText: string
}

export const ShowPDFButton = ({ title, filePath, hoverColorClassName, buttonText }: ShowPDFButtonType ) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className={`w-full ${hoverColorClassName}`}>
          <FileText className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-11/12 rounded-lg">
        <DialogHeader>
          <DialogTitle>Partitura: {title}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[80dvh] flex items-center justify-center">
          {/* Ejemplo para mostrar un PDF embebido si tienes la URL: */}
          <iframe src={filePath} width="100%" height="100%" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
