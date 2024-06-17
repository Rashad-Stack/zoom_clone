"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

function Table({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h2 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}
      </h2>
      <p className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </p>
    </div>
  );
}

export default function PersonalRoom() {
  const { toast } = useToast();
  const { user } = useUser();
  const meetingId = user?.id;
  const client = useStreamVideoClient();
  const router = useRouter();
  const { calls } = useGetCallById(meetingId!);

  const meetingLink = `${window.location.origin}/meeting/${meetingId}?personal=true`;

  const startMeetingRoom = async () => {
    if (!user || !client) return;

    const newCall = client.call("default", meetingId!);

    if (!calls) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date(Date.now()).toISOString(),
        },
      });
    }

    router.push(`/meeting/${meetingId}?personal=true`);
  };

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>

      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s meeting room`} />

        <Table title="Meeting ID" description={meetingId!} />

        <Table title="Meeting Link" description={meetingLink!} />
      </div>

      <div className="flex gap-5">
        <Button className="bg-blue-1" onClick={startMeetingRoom}>
          Start Meeting
        </Button>

        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink!);
            toast({ title: "Meeting link copied" });
          }}
        >
          Share Meeting Link
        </Button>
      </div>
    </section>
  );
}
