import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/ui/Button";
import { TextArea } from "../components/ui/TextArea";
import { Select } from "../components/ui/Select";
import { Link } from "react-router-dom";

type FormData = {
    nama: string;
    email: string;
    password: string;
    password_confirm: string;
    bio: string;
    event: string;
}

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email("Format email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    password_confirm: z.string().min(1, "Konfirmasi password wajib diisi"),
    bio: z.string().min(8, "Harus diisi mininal 8 kalimat"),
    event: z.string().min(1, "Nama event harus diisi")
}).refine((data) => {
    if (!data.password || !data.password_confirm) return true;
    return data.password === data.password_confirm;
}, {
    message: "Password tidak sama",
    path: ["password_confirm"],
});

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputText
                label="Nama"
                nama="nama"
                register={register}
                error={errors.nama?.message}
            />
            <InputText
                label="Email"
                nama="email"
                register={register}
                error={errors.email?.message}
            />
            <InputPassword
                label="Password"
                nama="password"
                register={register}
                error={errors.password?.message}
            />
            <InputPassword
                label="Password Confirm"
                nama="password_confirm"
                register={register}
                error={errors.password_confirm?.message}
            />

            <TextArea
                label="Bio"
                nama="bio"
                register={register}
                error={errors.bio?.message}
            />

            <Select
                label="Event"
                nama="event"
                register={register}
                options={[
                    { label: "Invofest", value: "invofest" },
                    { label: "Workshop AI", value: "ai" }
                ]}
                error={errors.event?.message}
            />

            <div>
                <Button label="Register" type="submit" variant="primary" ></Button>
            </div>

            <div className="mt-1">
                Sudah punya akun? <Link to="/login">Daftar Disini</Link>
            </div>
        </form>
    </div>
}