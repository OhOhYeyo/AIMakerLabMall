import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '../components/ui/Button/Button';
import Card from '../components/ui/Card/Card';
// 실제 구현 시 각 도메인 컴포넌트 import 필요
// import HeroBanner from '../components/domain/HeroBanner';
// import MegaMenu from '../components/domain/MegaMenu';
// import QuickLinks from '../components/domain/QuickLinks';
// import ProductGrid from '../components/domain/ProductGrid';
// import InquirySection from '../components/domain/InquirySection';
// import StatsSection from '../components/domain/StatsSection';
// import VideoShowcase from '../components/domain/VideoShowcase';
// import NoticeSection from '../components/domain/NoticeSection';

export default function HomePage() {
  // 더미 데이터 예시
  const products = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: '엔트리봇 DIY 하위컴 만들기',
    description: '수업시간: 2~3차시',
    imageUrl: '/images/products/robot-kit-basic.jpg',
    tag: '초등학교 추천',
  }));
  const quickLinks = [
    { icon: '📦', label: '교육키트 바로가기' },
    { icon: '📄', label: '수업 지도계획서 다운로드' },
    { icon: '💻', label: '소스코드 다운로드' },
    { icon: '❓', label: '자주 묻는 질문' },
  ];
  const stats = [
    { label: 'AI Maker Lab 수업개설 수', value: '2,959개교' },
    { label: '선생님이 진행한 수업시간', value: '23,761시간' },
    { label: '수업을 경험한 학생 수', value: '33,667명' },
    { label: '교육키트 누적 판매수', value: '95,090개' },
    { label: '함께한 대학 및 기관', value: '32개' },
    { label: '교육 및 수업 정보 누적 시청시간', value: '25,787시간' },
  ];
  const notices = [
    { title: '[공지] 2023년 하반기 배송 안내', date: '2023-09-07' },
    { title: '[공지] 2023년 하계 휴무 안내', date: '2023-08-01' },
    { title: '[공지] 2023년 상반기 배송 안내', date: '2023-03-01' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* HeroBanner */}
      <Box sx={{ mb: 4, borderRadius: 2, overflow: 'hidden', position: 'relative', background: '#e3f2fd' }}>
        <Box sx={{ p: { xs: 2, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
              아두이노 프로젝트 끝내기키트
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              로봇만들기 첫걸음을 위한 AI Maker Lab 교육키트
            </Typography>
            <Button variant="primary" size="lg">교육키트 바로가기</Button>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <img src="/images/main_banner.png" alt="메인 배너" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Box>
      </Box>

      {/* MegaMenu (드롭다운 메뉴) */}
      <Box sx={{ mb: 4 }}>
        {/* 실제 구현 시 MegaMenu 컴포넌트 사용 */}
        <Typography variant="h6" color="secondary" fontWeight={700}>
          교육 커리큘럼 · 수업 문의 · 교육 제품 · AI Maker 소개
        </Typography>
      </Box>

      {/* QuickLinks */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {quickLinks.map((link, idx) => (
          <Grid item xs={6} md={3} key={idx}>
            <Card>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h3">{link.icon}</Typography>
                <Typography variant="body1">{link.label}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ProductGrid */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          학년별 & 주제별 베스트 키트 추천
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <Box sx={{ p: 2 }}>
                  <img src={product.imageUrl} alt={product.title} style={{ width: '100%', borderRadius: 8 }} />
                  <Typography variant="subtitle2" color="primary" fontWeight={700} sx={{ mt: 1 }}>{product.tag}</Typography>
                  <Typography variant="h6" fontWeight={700}>{product.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{product.description}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* InquirySection (문의 탭) */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={700}>교육키트 구매 견적 문의</Typography>
              <Typography variant="body2" color="text.secondary">고객 문의 견적 문의 드립니다.</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={700}>코딩 출강 및 수업 문의</Typography>
              <Typography variant="body2" color="text.secondary">대면 수업 문의 | 스마트팜만들기 문의</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* StatsSection */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          {stats.map((stat, idx) => (
            <Grid item xs={6} md={2} key={idx}>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography variant="h6" fontWeight={700}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* VideoShowcase */}
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            밤에도 식물이 쑥쑥 AI MakerLab 아두이노 스마트팜 작동 영상
          </Typography>
          <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/1Q8fG0TtVAY"
              title="스마트팜 영상"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={700}>공지 사항</Typography>
              {notices.map((notice, idx) => (
                <Box key={idx} sx={{ mb: 1 }}>
                  <Typography variant="body2">{notice.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{notice.date}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
