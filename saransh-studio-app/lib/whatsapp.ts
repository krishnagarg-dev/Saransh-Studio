"use server";
export function getWhatsAppUrl(
  phone: string,
  message: string
): string {
  const cleanPhone = phone.replace(/[\s\-\+\(\)]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function getPackageWhatsAppUrl(packageName: string): string {
  const message = `Hi Saransh Studio, I would like to enquire about the ${packageName} package.`;
  return getWhatsAppUrl("+91 90277 31570", message);
}

export function getEnquiryWhatsAppUrl(): string {
  const message = "Hi Saransh Studio, I would like to enquire about wedding photography and cinematography.";
  return getWhatsAppUrl("+91 90277 31570", message);
}