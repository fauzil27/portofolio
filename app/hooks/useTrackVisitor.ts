import { useQuery } from "@tanstack/react-query";

export default function useTrackVisitor() {
  const { data, isPending, refetch, isLoading } = useQuery({
    queryKey: ["track-visitor"],
    queryFn: async () => {
      const response = await fetch("/api/track");
      const data = await response.json();
      return data;
    },
  });
  return { data, refetch, isPending, isLoading };
}
