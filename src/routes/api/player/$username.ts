import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/player/$username")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { username } = params;

        // Default data for normal players
        let player = {
          username,
          owner: false,
          verified: true,
          tiers: {
            sword: "HT1",
            axe: "LT2",
            crystal: "HT3",
            uhc: "HT2",
            mace: "LT1",
          },
        };

        // Blue_Gaming08 (Owner)
        if (username === "Blue_Gaming08") {
          player = {
            username,
            owner: true,
            verified: true,
            tiers: {
              sword: "HT1",
              axe: "HT1",
              crystal: "HT1",
              uhc: "HT1",
              mace: "HT1",
            },
          };
        }

        // BlueAlt
        if (username === "BlueAlt") {
          player = {
            username,
            owner: true,
            verified: true,
            tiers: {
              sword: "LT5",
              axe: "LT5",
              crystal: "LT5",
              uhc: "HT5",
              mace: "LT5",
            },
          };
        }

        return Response.json(player);
      },
    },
  },
});
