import { songList } from "@/lib/songs";

export default function SongList() {
  return (
    <div className="space-y-10">
      {songList.map((genre) => (
        <section key={genre.genre}>
          <h2 className="mb-4 text-xl font-semibold text-[#d97706]">
            {genre.genre}
          </h2>
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {genre.songs.map((song) => (
              <li
                key={song}
                className="text-sm text-[#d6d3d1] py-1"
              >
                {song}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
