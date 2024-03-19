import CardWrapper from "../_components/CardWrapper";
import FormRegister from "../_components/FormRegister";


export default function RegisterPage()
{
  return (
    <CardWrapper title="Stream Flow" children={<FormRegister />} />
  );
}