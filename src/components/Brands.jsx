const brands = ["Google", "Dropbox", "Upwork", "Slack", "Figma"];

export default function Brands() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-8">
          Work For All This Brand & Client
        </h3>

        <div className="flex flex-wrap gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white shadow-md px-6 py-4 rounded-full"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
