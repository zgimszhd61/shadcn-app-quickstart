// app/components/MyForm.tsx
import { Form } from "@remix-run/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

const MyForm: React.FC = () => {
  return (
    <Form method="post" action="/submit">
      <div>
        <label htmlFor="textInput">输入文本:</label>
        <Input id="textInput" name="textInput" type="text" />
      </div>
      <div>
        <Button type="submit">提交</Button>
      </div>
    </Form>
  );
};

export default MyForm;
