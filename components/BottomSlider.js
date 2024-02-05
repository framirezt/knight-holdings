"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BottomSlider({
  open,
  setOpen,
  children,
  title,
  paddingTop,
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-700 bg-opacity-75 transition-opacity backdrop-blur-sm " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden ">
            <div
              className="pointer-events-none fixed inset-y-0  flex w-screen "
              style={{ paddingTop: paddingTop || "55vh" }}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-700 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-700 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-[90vw] md:w-[70vw] mx-auto">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-3 top-2  flex pr-2 pt-4 z-40">
                      <button
                        type="button"
                        className="relative rounded-md text-[--t1] hover:text-[--t1] focus:outline-none focus:ring-2 focus:ring-[--t1]"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon
                          className="h-6 w-6 text-[--t1]"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-80 flex-col overflow-y-scroll bg-white  py-6 shadow-xl rounded-2xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
