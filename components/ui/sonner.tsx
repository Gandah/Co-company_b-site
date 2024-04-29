"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group-[.toaster]:bg-[conic-gradient(#2B4F7E,#81688B,#C56645,#9D1E78,#2B4F7E)] group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg flex justify-center items-center",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

const Toast = () => {
  return (
    <span
      className={
        "min-w-[21.625rem] py-[1rem] text-center rounded-[0.938rem] px-[2rem] text-[0.813rem] bg-radiantgradient text-white leading-[1.134rem] font-[500] flex flex-1 justify-center"
      }
    />
  );
};

export { Toaster, Toast };