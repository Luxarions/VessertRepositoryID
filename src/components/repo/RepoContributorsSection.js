/**
 * @module Components/Repo/RepoContributorsSection
 * @description Repository Contributors sidebar section.
 * @author prssbayu-oss
 */

function RepoContributorsSection( state ) {

	const { repo } = state;

	return `
    <div class="border-t border-[#30363d] pt-4">
      <h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">Contributors</h3>
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-[#1f6feb] border border-[#30363d] flex items-center justify-center text-[10px] text-white font-bold">
          ${ repo.owner.slice( 0, 1 ).toUpperCase() }
        </div>
        <a href="#" class="text-[#58a6ff] hover:underline font-medium">${ repo.owner }</a>
      </div>
    </div>
  `;

}

export { RepoContributorsSection };
