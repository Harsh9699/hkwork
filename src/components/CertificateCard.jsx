import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";

// Set up PDF worker dynamically to match the exact installed version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function CertificateCard({ certificate, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="soft-card overflow-hidden rounded-[28px] p-4 flex flex-col"
    >
      <div className="overflow-hidden rounded-[20px] bg-gray-50 relative group-hover:scale-[1.03] transition duration-500 flex items-center justify-center">
        {certificate.image.endsWith(".pdf") ? (
          <div className="w-full pointer-events-none flex items-center justify-center">
            {isInView && (
              <Document file={certificate.image} className="w-full flex items-center justify-center" loading={null}>
                <Page
                  pageNumber={1}
                  width={350}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="flex items-center justify-center [&>.react-pdf__Page__canvas]:!max-w-full [&>.react-pdf__Page__canvas]:!h-auto [&>.react-pdf__Page__canvas]:!object-contain"
                />
              </Document>
            )}
          </div>
        ) : (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto object-contain"
          />
        )}
      </div>

      <div className="pt-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 flex-1">
          <div>
            <h3 className="text-lg lg:text-xl font-semibold tracking-tight">
              {certificate.title}
            </h3>
            <p className="mt-2 text-sm text-textMuted">{certificate.issuer}</p>
          </div>
          <span className="text-sm font-medium text-textMuted">
            {certificate.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
