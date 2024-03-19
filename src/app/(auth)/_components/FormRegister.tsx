import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type Props = {

}

const FormRegister = (props: Props) =>
{
  return (
    <form>
      <div className="grid w-full gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" placeholder="Email" type="email" />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Password" type="password" />
        </div>
        <Button className="mt-4">Crear cuenta</Button>
      </div>
    </form>

  )
}

export default FormRegister