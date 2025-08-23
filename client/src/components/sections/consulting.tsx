import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Check, Star } from "lucide-react";

export default function Consulting() {
  const handleBasicBooking = () => {
    window.location.href = "https://buy.stripe.com/5kAeXXgtE8K2eBO7ss";
  };

  const handlePremiumBooking = () => {
    // 预留按钮，稍后替换支付链接
    console.log("Premium consultation booking - link to be provided");
  };

  return (
    <section id="consulting" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Web3 & GenAI Consulting</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            选择适合您需求的咨询方案，获得专业指导开启您的 Web3 和 GenAI 之旅
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 基础方案 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full relative">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">快速启动方案</CardTitle>
                <div className="text-3xl font-bold text-primary">$4.5</div>
                <p className="text-sm text-muted-foreground">适合初步了解和快速启动</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">30分钟 1对1 线上沟通</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">需求分析和目标梳理</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">技术路线图制定</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">简单技术架构指引</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">关键技术选型建议</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handleBasicBooking}
                    className="w-full h-12 text-base"
                    variant="outline"
                  >
                    选择快速启动方案
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 深度方案 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  推荐方案
                </div>
              </div>
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl font-bold">深度咨询方案</CardTitle>
                <div className="text-3xl font-bold text-primary">$35.5</div>
                <p className="text-sm text-muted-foreground">深度分析，详细规划</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">60分钟 1对1 线上沟通</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">详细需求分析和业务评估</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">可落地执行的详细路线图</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">完整技术架构设计</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">功能模块分析和性能瓶颈评估</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">云服务和 AI 资源评估</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">详细实施计划和时间安排</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handlePremiumBooking}
                    className="w-full h-12 text-base"
                    disabled
                  >
                    选择深度咨询方案 (即将开放)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>注：所有咨询仅提供详细规划和指导，不包含后续实施服务</p>
        </div>
      </div>
    </section>
  );
}