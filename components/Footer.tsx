import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-5 px-4 text-center text-sm mt-auto shadow-[0_-2px_8px_rgba(0,0,0,0.3)]">
      <div className="mb-3">
        <Link
          href="https://www.linkedin.com/in/álvaro-noronha-2075a5248"
          target="_blank"
          rel="noopener"
          title="LinkedIn (dev)"
          className="text-white text-xl transition-colors hover:text-[#0a66c2]"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
      <p>
        📩 <strong>Entre em contato:</strong>{" "}
        <Link
          href="mailto:alvarolangtech@gmail.com"
          className="text-[#007bff] no-underline hover:underline"
        >
          alvarolangtech@gmail.com
        </Link>
        <span className="text-[#00d1b2] font-semibold ml-1.5 inline-block break-words">
          | DevSecOps 🔒
        </span>
      </p>
    </footer>
  );
}

