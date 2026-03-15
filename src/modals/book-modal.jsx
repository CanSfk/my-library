import { useState } from "react";

// Store
import { useModalSlice } from "../store/modal/hooks";
import { removeModal } from "../store/modal/action";
import { setLibrary } from "../store/library/action";

// Components
import { ModalContainer } from "../components/modal";
import { Button, Label, Textarea } from "../components/ui";

// Headlessui
import { Field, Radio, Label as HdLabel, RadioGroup } from "@headlessui/react";

export const BookModal = () => {
  const { modal_data } = useModalSlice();

  const plans = [
    { id: 1, name: "Okunacak" },
    { id: 2, name: "Okunuyor" },
    { id: 3, name: "Okundu" },
  ];

  const [formData, setFormData] = useState({
    bookId: modal_data.bookId,
    readStatus: modal_data?.readStatus ?? 1,
    note: modal_data?.note,
  });

  const handleFormData = ({ key, value }) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setLibrary({
      book: {
        bookId: formData.bookId,
        readStatus: formData.readStatus,
        note: formData.note,
      },
    });

    removeModal();
  };

  return (
    <ModalContainer title="Kütüphaneye Kaydet">
      <h5 className="text-lg font-semibold text-text-primary">
        {modal_data?.title}
      </h5>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <RadioGroup
          value={formData.readStatus}
          onChange={(vl) => handleFormData({ key: "readStatus", value: vl })}
          aria-label="read-status"
          className="flex gap-8"
        >
          {plans.map((plan) => (
            <Field key={plan.id} className="flex items-center gap-4">
              <HdLabel className="cursor-pointer font-medium text-text-primary">
                {plan.name}
              </HdLabel>

              <Radio
                value={plan.id}
                className="cursor-pointer w-4 h-4 border rounded-full data-checked:bg-black"
              />
            </Field>
          ))}
        </RadioGroup>

        <div className="flex gap-1 flex-col flex-1">
          <Label htmlFor="not" text="Not" />

          <Textarea
            id="not"
            value={formData.note}
            onChange={(e) =>
              handleFormData({ key: "note", value: e.target.value })
            }
          />
        </div>

        <div className="flex justify-end mt-5">
          <Button type="submit" text="Kaydet" />
        </div>
      </form>
    </ModalContainer>
  );
};
