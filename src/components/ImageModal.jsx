export default function ImageModal({ isOpen, imageSrc, altText, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={imageSrc} 
          alt={altText} 
          className="rounded-[2rem] w-full object-contain max-h-[80vh]"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-softcream hover:bg-wood transition"
          aria-label="Bezárás"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
