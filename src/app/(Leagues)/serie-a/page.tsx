import { filterLeague, filterLeagueFinished } from "@/api";
import LeagueTable from "@/components/league-table/LeagueTable";
import Link from "next/link";

const SerieA = async () => {
  const league = "Serie A";

  const getSerieA = await filterLeague(league);
  const getSerieALeagueFinished = await filterLeagueFinished(league);

  const nd = new Date();
  const dateConvert = nd.toDateString();

  return (
    <section className="px-2 md:px-4 md:w-[600px]">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h1 className="px-4 py-0 md:py-1 bg-teal-100 rounded-md text-md md:text-xl font-bold">
          Sport{` > `}Football{" "}
          <Link href="/" className="text-teal-500">
            MATCHES
          </Link>
          {` > `}LEAGUES
        </h1>
        <div className="px-4 py-0 md:py-1 bg-slate-600 rounded-md text-textSecondary text-sm">
          <p>{`${dateConvert}`}</p>
        </div>
      </div>
      {getSerieA?.length == 0 ? (
        <div className="py-3 px-2 md:px-3 rounded-md flex flex-col bg-gradient-to-b from-[rgb(45,59,87)] to-transparent text-primary mb-2">
          <p>No scheduled matches found in {league} League...</p>
          <Link
            href="/bundesliga"
            className="flex items-center py-2 px-2 rounded-md text-textSecondary hover:bg-[rgb(54,63,78)]"
          >
            {"->"}You can try instead: Bundesliga
          </Link>
        </div>
      ) : (
        getSerieA?.map((data) => (
          <div key={data.id}>
            <LeagueTable matches={data} />
          </div>
        ))
      )}
      {getSerieALeagueFinished?.length == 0 ? (
        <div className="py-3 px-2 md:px-3 rounded-md flex flex-col bg-gradient-to-b from-[rgb(45,59,87)] to-transparent text-primary mb-2">
          <p>No finished matches found in {league} League...</p>
          <Link
            href="/bundesliga"
            className="flex items-center py-2 px-2 rounded-md text-textSecondary hover:bg-[rgb(54,63,78)]"
          >
            {"->"}You can try instead: Bundesliga
          </Link>
        </div>
      ) : (
        getSerieALeagueFinished?.map((data) => (
          <div key={data.id}>
            <LeagueTable matches={data} />
          </div>
        ))
      )}
    </section>
  );
};

export default SerieA;
