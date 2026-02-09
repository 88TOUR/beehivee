import Container from '@/components/ui/Container';
import { footer } from '@/content/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-white py-10 text-sm text-black/60">
      <Container>
        <div className="space-y-3 leading-relaxed">
          <div className="text-black/70 font-medium">{footer.company}</div>

          <p>{footer.address}</p>

          <p>
            대표자: {footer.ceo} · 전화: {footer.phone}
          </p>

          <p>
            사업자등록번호: {footer.bizNo} · 통신판매업신고번호: {footer.mailOrderNo}
          </p>

          <p>
            이메일:{' '}
            <a href={`mailto:${footer.email}`} className="underline underline-offset-4">
              {footer.email}
            </a>
          </p>

          <p className="pt-2 text-xs text-black/50">{footer.disclaimer}</p>
          <p className="pt-3 text-xs text-black/40">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}