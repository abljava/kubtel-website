"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PersonalData() {
  const router = useRouter();
  return (
    <main>
      <section className="w-full mt-12 p-6">
        <h1 className="mb-8">Страница с описанием персональных данных в разработке</h1>
        <Button
          className="w-full"
          variant="kubtel"
          type="button"
          onClick={() => router.back()}
        >
          Назад
        </Button>
      </section>
    </main>
  );
}
